import { expect, Locator, Page } from '@playwright/test';

export abstract class BaseComponent {
  protected readonly page: Page;
  protected readonly root: Locator;

  constructor(page: Page, root: Locator) {
    this.page = page;
    this.root = root;
  }

  // ======================================================
  // Component State
  // ======================================================

  async waitUntilVisible(): Promise<void> {
    await this.root.waitFor({
      state: 'visible',
    });
  }

  async waitUntilHidden(): Promise<void> {
    await this.root.waitFor({
      state: 'hidden',
    });
  }

  async isVisible(): Promise<boolean> {
    return this.root.isVisible();
  }

  async isHidden(): Promise<boolean> {
    return this.root.isHidden();
  }

  // ======================================================
  // Component Locators
  // ======================================================

  protected locator(selector: string): Locator {
    return this.root.locator(selector);
  }

  protected getByRole(...args: Parameters<Locator['getByRole']>): Locator {
    return this.root.getByRole(...args);
  }

  protected getByText(text: string): Locator {
    return this.root.getByText(text);
  }

  protected getByLabel(text: string): Locator {
    return this.root.getByLabel(text);
  }

  protected getByPlaceholder(text: string): Locator {
    return this.root.getByPlaceholder(text);
  }

  // ======================================================
  // Common Actions
  // ======================================================

  protected async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  protected async fill(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  protected async hover(locator: Locator): Promise<void> {
    await locator.hover();
  }

  protected async getText(locator: Locator): Promise<string> {
    return (await locator.textContent())?.trim() ?? '';
  }

  protected async getCount(locator: Locator): Promise<number> {
    return locator.count();
  }

  // ======================================================
  // Assertions
  // ======================================================

  protected async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  protected async expectText(locator: Locator, expected: string): Promise<void> {
    await expect(locator).toHaveText(expected);
  }

  protected async expectCount(locator: Locator, count: number): Promise<void> {
    await expect(locator).toHaveCount(count);
  }
}


//Example 1 – Sidebar Component
     //src/components/SidebarComponent.ts

//      //
//      import { Page } from '@playwright/test';

// import { BaseComponent } from '@core/BaseComponent';

// export class SidebarComponent extends BaseComponent {
//   constructor(page: Page) {
//     super(page, page.locator('.oxd-sidepanel'));
//   }

//   readonly adminMenu = this.getByRole('link', {
//     name: 'Admin',
//   });

//   readonly pimMenu = this.getByRole('link', {
//     name: 'PIM',
//   });

//   readonly leaveMenu = this.getByRole('link', {
//     name: 'Leave',
//   });

//   async openAdmin(): Promise<void> {
//     await this.click(this.adminMenu);
//   }

//   async openPIM(): Promise<void> {
//     await this.click(this.pimMenu);
//   }

//   async openLeave(): Promise<void> {
//     await this.click(this.leaveMenu);
//   }
// }
//


// Example 2 – Top Navigation Component
// src/components/TopBarComponent.ts
// import { Page } from '@playwright/test';

// import { BaseComponent } from '@core/BaseComponent';

// export class TopBarComponent extends BaseComponent {
//   constructor(page: Page) {
//     super(page, page.locator('.oxd-topbar'));
//   }

//   readonly userDropdown = this.getByRole('img');

//   readonly logout = this.getByText('Logout');

//   async logoutFromApplication(): Promise<void> {
//     await this.click(this.userDropdown);
//     await this.click(this.logout);
//   }
// }
// Using Components Inside a Page

// Example DashboardPage.ts:

// import { Page } from '@playwright/test';

// import { BasePage } from '@core/BasePage';
// import { SidebarComponent } from '@components/SidebarComponent';
// import { TopBarComponent } from '@components/TopBarComponent';

// export class DashboardPage extends BasePage {
//   readonly sidebar: SidebarComponent;

//   readonly topBar: TopBarComponent;

//   constructor(page: Page) {
//     super(page);

//     this.sidebar = new SidebarComponent(page);
//     this.topBar = new TopBarComponent(page);
//   }
// }

// Now your test becomes very clean:

// await dashboard.sidebar.openAdmin();

// await dashboard.sidebar.openPIM();

// await dashboard.topBar.logoutFromApplication();