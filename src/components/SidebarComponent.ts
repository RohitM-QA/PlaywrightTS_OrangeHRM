import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "@core/BaseComponent";

export class SidebarComponent extends BaseComponent {

  //Sidebar Items
  readonly sidebar: Locator:
  readonly collapseButton: Locator;
  readonly searchInput: Locator;

  //Menu Items
  readonly dashboardMenu: Locator;
  readonly adminMenu: Locator;
  readonly pimMenu: Locator;
  readonly leaveMenu: Locator;
  readonly timeMenu: Locator;
  readonly recruitmentMenu: Locator;
  readonly performanceMenu: Locator;
  readonly directoryMenu: Locator;
  readonly maintenanceMenu: Locator;
  readonly claimMenu: Locator;
  readonly buzzMenu: Locator;
  

  constructor(page: Page) {
        super(
            page,
            page.locator('.oxd-sidepanel')
        );

        this.sidebar = this.root;

        this.collapseButton = page.locator('button.oxd-icon-button');
        this.searchInput = page.getByPlaceholder('Search');
        this.dashboardMenu = page.getByRole('link', {
            name: 'Dashboard',
        });



}