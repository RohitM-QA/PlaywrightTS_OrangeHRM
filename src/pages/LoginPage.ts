import { Locator, Page } from "@playwright/test";
import { BasePage } from "@core/BasePage";
import { env } from "@config/env";
import { CredentialManager, UserRole } from '@config/credentials';
import { DashboardPage } from "@pages/DashboardPage";


export class LoginPage extends BasePage {

  //Locators:
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  //readonly forgotPasswordLink: Locator;
  readonly orangeHRMLogo: Locator;
  readonly errorMessage: Locator;
  readonly requiredMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = this.page.locator('input[name="username"]')
    this.passwordInput = this.page.locator('input[name="password"]');
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
    //this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot your password?' });
    this.orangeHRMLogo = page.locator('.orangehrm-login-branding');
    this.errorMessage = page.locator('.oxd-alert-content-text');
    this.requiredMessage = page.locator(
      '.oxd-input-field-error-message',
    );

  }

  // Navigation
  async goto(): Promise<void> {
    await this.navigate(`${env.app.baseUrl}/auth/login`);

    await this.waitForVisible(this.usernameInput);
  }

  // Login Actions:
  async enterUsername(username: string): Promise<void> {
    await this.fill(this.usernameInput, username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.fill(this.passwordInput, password);
  }

  async clickLogin(): Promise<void> {
    await this.click(this.loginButton);
  }

  // async clickForgotPassword(): Promise<void> {
  //   await this.click(this.forgotPasswordLink);
  // }

  async login(username: string, password: string): Promise<DashboardPage> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();

    return new DashboardPage(this.page);
  }

  //Login By Role
  async loginAs(role: UserRole): Promise<DashboardPage> {
    const credential = CredentialManager.get(role);

    return await this.login(
      credential.username,
      credential.password,
    );
  }

  async loginAsAdmin(): Promise<DashboardPage> {
    return await this.loginAs(UserRole.ADMIN);
  }

  // Username Helpers
  async clearUsername(): Promise<void> {
    await this.usernameInput.clear();
  }

  async getUsername(): Promise<string> {
    return await this.usernameInput.inputValue();
  }

  async getUsernamePlaceholder(): Promise<string | null> {
    return await this.usernameInput.getAttribute('placeholder');
  }


  // Password Helpers
  async clearPassword(): Promise<void> {
    await this.passwordInput.clear();
  }

  async getPassword(): Promise<string> {
    return await this.passwordInput.inputValue();
  }

  async getPasswordPlaceholder(): Promise<string | null> {
    return await this.passwordInput.getAttribute('placeholder');
  }

  async isPasswordMasked(): Promise<boolean> {
    return (
      (await this.passwordInput.getAttribute('type')) === 'password'
    );
  }

  // Keyboard Helpers
  async pressTab(): Promise<void> {
    await this.page.keyboard.press('Tab');
  }

  async pressShiftTab(): Promise<void> {
    await this.page.keyboard.press('Shift+Tab');
  }

  async pressEnter(): Promise<void> {
    await this.page.keyboard.press('Enter');
  }

  // Browser Helpers
  async refreshPage(): Promise<void> {
    await this.page.reload();
  }

  async goBack(): Promise<void> {
    await this.page.goBack();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  // Field State Helpers
  async isUsernameEmpty(): Promise<boolean> {
    return (await this.getUsername()) === '';
  }

  async isPasswordEmpty(): Promise<boolean> {
    return (await this.getPassword()) === '';
  }

  async isLoginButtonEnabled(): Promise<boolean> {
    return await this.loginButton.isEnabled();
  }

  async isLoginButtonDisabled(): Promise<boolean> {
    return !(await this.loginButton.isEnabled());
  }


  // Focus Helpers
  async focusUsername(): Promise<void> {
    await this.usernameInput.focus();
  }

  async focusPassword(): Promise<void> {
    await this.passwordInput.focus();
  }


  //Validation

  async getErrorMessage(): Promise<string> {
    return this.getText(this.errorMessage);
  }

  async getRequiredMessages(): Promise<string[]> {
    return await this.requiredMessage.allTextContents();
  }

  async isLoginButtonVisible(): Promise<boolean> {
    return this.isVisible(this.loginButton);
  }

  async isUsernameVisible(): Promise<boolean> {
    return this.isVisible(this.usernameInput);
  }

  async isPasswordVisible(): Promise<boolean> {
    return this.isVisible(this.passwordInput);
  }

  // async isForgotPasswordVisible(): Promise<boolean> {
  //   return this.isVisible(this.forgotPasswordLink);
  // }

  async isLogoVisible(): Promise<boolean> {
    return this.isVisible(this.orangeHRMLogo);
  }

  // Page Verification
  async verifyLoginPageLoaded(): Promise<void> {
    await this.expectVisible(this.usernameInput);
    await this.expectVisible(this.passwordInput);
    await this.expectVisible(this.loginButton);

    await this.expectTitle(/OrangeHRM/i);
  }

  // Convenience Methods
  async loginWithInvalidCredentials(): Promise<void> {
    await this.login(
      'InvalidUser',
      'InvalidPassword',
    );
  }

  async loginWithEmptyCredentials(): Promise<void> {
    await this.login('', '');
  }

  async loginWithOnlyUsername(username: string): Promise<void> {
    await this.enterUsername(username);

    await this.clickLogin();
  }

  async loginWithOnlyPassword(password: string): Promise<void> {
    await this.enterPassword(password);

    await this.clickLogin();
  }

  async clearCredentials(): Promise<void> {
    await this.clearAndFill(this.usernameInput, '');

    await this.clearAndFill(this.passwordInput, '');
  }
}
