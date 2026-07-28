import { expect, Locator, Page } from "@playwright/test";

export class SidebarComponent {
  readonly page: Page;

  // Logo
  readonly logo: Locator;

  // Search
  readonly searchInput: Locator;

  // Menu Items
  readonly adminMenu: Locator;
  readonly pimMenu: Locator;
  readonly leaveMenu: Locator;
  readonly timeMenu: Locator;
  readonly recruitmentMenu: Locator;
  readonly myInfoMenu: Locator;
  readonly performanceMenu: Locator;
  readonly dashboardMenu: Locator;
  readonly directoryMenu: Locator;
  readonly maintenanceMenu: Locator;
  readonly claimMenu: Locator;
  readonly buzzMenu: Locator;

  constructor(page: Page) {
    this.page = page;

    this.logo = page.locator(".oxd-brand-banner img");

    this.searchInput = page.getByPlaceholder("Search");

    this.adminMenu = page.getByRole("link", { name: "Admin" });
    this.pimMenu = page.getByRole("link", { name: "PIM" });
    this.leaveMenu = page.getByRole("link", { name: "Leave" });
    this.timeMenu = page.getByRole("link", { name: "Time" });
    this.recruitmentMenu = page.getByRole("link", { name: "Recruitment" });
    this.myInfoMenu = page.getByRole("link", { name: "My Info" });
    this.performanceMenu = page.getByRole("link", { name: "Performance" });
    this.dashboardMenu = page.getByRole("link", { name: "Dashboard" });
    this.directoryMenu = page.getByRole("link", { name: "Directory" });
    this.maintenanceMenu = page.getByRole("link", { name: "Maintenance" });
    this.claimMenu = page.getByRole("link", { name: "Claim" });
    this.buzzMenu = page.getByRole("link", { name: "Buzz" });
  }

  async verifySidebarVisible(): Promise<void> {
    await expect(this.logo).toBeVisible();
  }

  async search(menu: string): Promise<void> {
    await this.searchInput.fill(menu);
  }

  async openDashboard(): Promise<void> {
    await this.dashboardMenu.click();
  }

  async openAdmin(): Promise<void> {
    await this.adminMenu.click();
  }

  async openPIM(): Promise<void> {
    await this.pimMenu.click();
  }

  async openLeave(): Promise<void> {
    await this.leaveMenu.click();
  }

  async openTime(): Promise<void> {
    await this.timeMenu.click();
  }

  async openRecruitment(): Promise<void> {
    await this.recruitmentMenu.click();
  }

  async openMyInfo(): Promise<void> {
    await this.myInfoMenu.click();
  }

  async openPerformance(): Promise<void> {
    await this.performanceMenu.click();
  }

  async openDirectory(): Promise<void> {
    await this.directoryMenu.click();
  }

  async openMaintenance(): Promise<void> {
    await this.maintenanceMenu.click();
  }

  async openClaim(): Promise<void> {
    await this.claimMenu.click();
  }

  async openBuzz(): Promise<void> {
    await this.buzzMenu.click();
  }

  async navigateTo(menu: string): Promise<void> {
    await this.page
      .getByRole("link", { name: new RegExp(`^${menu}$`, "i") })
      .click();
  }
}