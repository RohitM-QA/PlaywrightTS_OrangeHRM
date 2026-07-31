import { Locator, Page } from '@playwright/test';
import { BaseComponent } from '@core/BaseComponent';

export class TopBarComponent extends BaseComponent {

  // Root
  readonly topBar: Locator;

  // Header
  readonly pageTitle: Locator;
  readonly breadcrumb: Locator;

  // Icons
  readonly searchButton: Locator;
  readonly helpButton: Locator;
  readonly notificationButton: Locator;
  readonly userDropdownButton: Locator;

  // User Menu
  readonly aboutMenu: Locator;
  readonly supportMenu: Locator;
  readonly changePasswordMenu: Locator;
  readonly logoutMenu: Locator;
  constructor(page: Page) {

    super(
      page,
      page.locator('.oxd-topbar')
    );

    this.topBar = this.root;
    this.pageTitle = page.locator('.oxd-topbar-header-title');
    this.breadcrumb = page.locator('.oxd-topbar-body-nav');
    this.searchButton = page.locator('.oxd-topbar-header input');
    this.helpButton = page.locator('button[title="Help"]');
    this.notificationButton = page.locator('.oxd-userdropdown');
    this.userDropdownButton = page.locator('.oxd-userdropdown-tab');
    this.aboutMenu = page.getByRole('menuitem', {
      name: 'About'
    });

    this.supportMenu = page.getByRole('menuitem', {
      name: 'Support'
    });

    this.changePasswordMenu = page.getByRole('menuitem', {
      name: 'Change Password'
    });

    this.logoutMenu = page.getByRole('menuitem', {
      name: 'Logout'
    });

  }


  // Verification
  async verifyLoaded(): Promise<void> {
    await this.waitUntilVisible();
    await this.expectVisible(
      this.userDropdownButton
    );

  }

  async isVisible(): Promise<boolean> {
    return super.isVisible();
  }

  // Information
  async getPageTitle(): Promise<string> {
    return this.getText(this.pageTitle);
  }


  // User Menu
  async openUserMenu(): Promise<void> {

    await this.click(
      this.userDropdownButton
    );

  }

  async openAbout(): Promise<void> {

    await this.openUserMenu();
    await this.click(
      this.aboutMenu
    );

  }

  async openSupport(): Promise<void> {

    await this.openUserMenu();
    await this.click(
      this.supportMenu
    );

  }

  async changePassword(): Promise<void> {

    await this.openUserMenu();
    await this.click(
      this.changePasswordMenu
    );

  }

  async logout(): Promise<void> {

    await this.openUserMenu();
    await this.click(
      this.logoutMenu
    );

  }

  // State
  async isUserMenuOpen(): Promise<boolean> {
    return this.logoutMenu.isVisible();
  }

}