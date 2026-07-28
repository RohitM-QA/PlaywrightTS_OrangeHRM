import { expect, Locator, Page } from "@playwright/test";

export class TopBarComponent {
  readonly page: Page;

  readonly topBar: Locator;
  readonly pageTitle: Locator;
  readonly userDropdown: Locator;
  readonly profileImage: Locator;

  readonly aboutOption: Locator;
  readonly supportOption: Locator;
  readonly changePasswordOption: Locator;
  readonly logoutOption: Locator;

  constructor(page: Page) {
    this.page = page;

    this.topBar = page.locator(".oxd-topbar");

    this.pageTitle = page.locator(".oxd-topbar-header-breadcrumb h6");

    this.userDropdown = page.locator(".oxd-userdropdown-tab");

    this.profileImage = page.locator(".oxd-userdropdown-img");

    this.aboutOption = page.getByRole("menuitem", { name: "About" });

    this.supportOption = page.getByRole("menuitem", { name: "Support" });

    this.changePasswordOption = page.getByRole("menuitem", {
      name: "Change Password",
    });

    this.logoutOption = page.getByRole("menuitem", {
      name: "Logout",
    });
  }

  async verifyTopBarVisible(): Promise<void> {
    await expect(this.topBar).toBeVisible();
  }

  async getPageTitle(): Promise<string> {
    return (await this.pageTitle.textContent()) ?? "";
  }

  async openUserMenu(): Promise<void> {
    await this.userDropdown.click();
  }

  async clickAbout(): Promise<void> {
    await this.openUserMenu();
    await this.aboutOption.click();
  }

  async clickSupport(): Promise<void> {
    await this.openUserMenu();
    await this.supportOption.click();
  }

  async clickChangePassword(): Promise<void> {
    await this.openUserMenu();
    await this.changePasswordOption.click();
  }

  async logout(): Promise<void> {
    await this.openUserMenu();
    await this.logoutOption.click();
  }

  async verifyLoggedIn(): Promise<void> {
    await expect(this.profileImage).toBeVisible();
  }
}