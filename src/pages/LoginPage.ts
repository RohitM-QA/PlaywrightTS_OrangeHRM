import { Locator, Page } from '@playwright/test';

import { BasePage } from '@core/BasePage';
import { env } from '@config/env';
import { CredentialManager, UserRole } from '@config/credentials';

export class LoginPage extends BasePage {

  // Locators  
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly orangeHRMLogo: Locator;
  readonly errorMessage: Locator;
  readonly requiredMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.getByPlaceholder('Username');

    this.passwordInput = page.getByPlaceholder('Password');

    this.loginButton = page.getByRole('button', {
      name: 'Login',
    });

    this.forgotPasswordLink = page.getByRole('link', {
      name: 'Forgot your password?',
    });

    this.orangeHRMLogo = page.locator('.orangehrm-login-branding img');

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

    // Actions
    async enterUsername(username: string): Promise<void> {
    await this.fill(this.usernameInput, username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.fill(this.passwordInput, password);
  }

  async clickLogin(): Promise<void> {
    await this.click(this.loginButton);
  }

  async clickForgotPassword(): Promise<void> {
    await this.click(this.forgotPasswordLink);
  }

  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);

    await this.enterPassword(password);

    await this.clickLogin();
  }

  
  // Login By Role
    async loginAs(role: UserRole): Promise<void> {
    const credential = CredentialManager.get(role);

    await this.login(
      credential.username,
      credential.password,
    );
  }

  async loginAsAdmin(): Promise<void> {
    await this.loginAs(UserRole.ADMIN);
  }

  
  // Validation
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

  async isForgotPasswordVisible(): Promise<boolean> {
    return this.isVisible(this.forgotPasswordLink);
  }

  async isLogoVisible(): Promise<boolean> {
    return this.isVisible(this.orangeHRMLogo);
  }

  
  // Page Verification
    async verifyLoginPageLoaded(): Promise<void> {
    await this.assertions.expectVisible(this.usernameInput);

    await this.assertions.expectVisible(this.passwordInput);

    await this.assertions.expectVisible(this.loginButton);

    await this.assertions.expectTitle(/OrangeHRM/i);
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