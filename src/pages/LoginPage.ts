import { Locator, Page } from "@playwright/test";
import { BasePage } from "@core/BasePage";
import { env } from "@config/env";

export class LoginPage extends BasePage {

  //Locators:
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });

  }

  // Navigation
  async goto(): Promise<void> {
    await this.navigate(`${env.app.baseUrl}/auth/login`);

    await this.waitForVisible(this.usernameInput);
  }

  // Actions:
  async enterUsername(username: string): Promise<void> {
    await this.fill(this.usernameInput, username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.fill(this.passwordInput, password);
  }

  async clickLogin(): Promise<void> {
    await this.click(this.loginButton);
  }

  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  // Page Verification
  async verifyLoginPageLoaded(): Promise<void> {
    await this.expectVisible(this.usernameInput);

    await this.expectVisible(this.passwordInput);

    await this.expectVisible(this.loginButton);

    await this.expectTitle(/OrangeHRM/i);
  }




}
