import { Locator, Page } from '@playwright/test';

import { BasePage } from '@core/BasePage';
import { SidebarComponent } from "@components/SidebarComponent";
import { TopBarComponent } from '@components/TopBarComponent';

export class DashboardPage extends BasePage {
  // ============================================
  // Components
  // ============================================

  readonly sidebar: SidebarComponent;

  readonly topBar: TopBarComponent;

  // ============================================
  // Locators
  // ============================================

  readonly dashboardHeader: Locator;

  readonly dashboardTitle: Locator;

  readonly searchBox: Locator;

  readonly dashboardCards: Locator;

  readonly quickLaunchPanel: Locator;

  constructor(page: Page) {
    super(page);

    this.sidebar = new SidebarComponent(page);

    this.topBar = new TopBarComponent(page);

    this.dashboardHeader = page.locator('.oxd-topbar-header');

    this.dashboardTitle = page.getByRole('heading', {
      name: 'Dashboard',
    });

    this.searchBox = page.getByPlaceholder('Search');

    this.dashboardCards = page.locator('.orangehrm-dashboard-widget');

    this.quickLaunchPanel = page.locator(
      '.orangehrm-dashboard-grid',
    );
  }

  // ============================================
  // Page Verification
  // ============================================

  async verifyDashboardLoaded(): Promise<void> {
    await this.assertions.expectVisible(
      this.dashboardTitle,
    );

    await this.assertions.expectVisible(
      this.dashboardHeader,
    );

    await this.assertions.expectUrl(/dashboard/);
  }

  // ============================================
  // Search
  // ============================================

  async searchMenu(menu: string): Promise<void> {
    await this.fill(this.searchBox, menu);
  }

  async clearSearch(): Promise<void> {
    await this.clearAndFill(this.searchBox, '');
  }

  // ============================================
  // Dashboard Information
  // ============================================

  async getDashboardTitle(): Promise<string> {
    return this.getText(this.dashboardTitle);
  }

  async getTotalWidgets(): Promise<number> {
    return this.getCount(this.dashboardCards);
  }

  // ============================================
  // State
  // ============================================

  async isDashboardDisplayed(): Promise<boolean> {
    return this.isVisible(this.dashboardTitle);
  }

  async isSearchVisible(): Promise<boolean> {
    return this.isVisible(this.searchBox);
  }
}