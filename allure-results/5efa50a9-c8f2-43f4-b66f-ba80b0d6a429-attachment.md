# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.ts >> Login - Smoke TEST >> TC_002 - Login with valid Admin credentials
- Location: tests\smoke\login.spec.ts:21:8

# Error details

```
TypeError: Cannot read properties of undefined (reading 'expectVisible')
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | 
  3  | import { BasePage } from '@core/BasePage';
  4  | import { SidebarComponent } from '@components/SidebarComponent';
  5  | import { TopBarComponent } from '@components/TopBarComponent';
  6  | 
  7  | export class DashboardPage extends BasePage {
  8  | 
  9  |   // Components
  10 |   readonly sidebar: SidebarComponent;
  11 | 
  12 |   readonly topBar: TopBarComponent;
  13 | 
  14 | 
  15 |   // Locators
  16 |   readonly dashboardHeader: Locator;
  17 | 
  18 |   readonly dashboardTitle: Locator;
  19 | 
  20 |   readonly searchBox: Locator;
  21 | 
  22 |   readonly dashboardCards: Locator;
  23 | 
  24 |   readonly quickLaunchPanel: Locator;
  25 | 
  26 |   constructor(page: Page) {
  27 |     super(page);
  28 | 
  29 |     this.sidebar = new SidebarComponent(page);
  30 | 
  31 |     this.topBar = new TopBarComponent(page);
  32 | 
  33 |     this.dashboardHeader = page.locator('.oxd-topbar-header');
  34 | 
  35 |     this.dashboardTitle = page.getByRole('heading', {
  36 |       name: 'Dashboard',
  37 |     });
  38 | 
  39 |     this.searchBox = page.getByPlaceholder('Search');
  40 | 
  41 |     this.dashboardCards = page.locator('.orangehrm-dashboard-widget');
  42 | 
  43 |     this.quickLaunchPanel = page.locator(
  44 |       '.orangehrm-dashboard-grid',
  45 |     );
  46 |   }
  47 | 
  48 | 
  49 |   // Page Verification
  50 |   async verifyDashboardLoaded(): Promise<void> {
> 51 |     await this.assertions.expectVisible(
     |                           ^ TypeError: Cannot read properties of undefined (reading 'expectVisible')
  52 |       this.dashboardTitle,
  53 |     );
  54 | 
  55 |     await this.assertions.expectVisible(
  56 |       this.dashboardHeader,
  57 |     );
  58 | 
  59 |     await this.assertions.expectUrl(/dashboard/);
  60 |   }
  61 | 
  62 |   // Search
  63 |   async searchMenu(menu: string): Promise<void> {
  64 |     await this.fill(this.searchBox, menu);
  65 |   }
  66 | 
  67 |   async clearSearch(): Promise<void> {
  68 |     await this.clearAndFill(this.searchBox, '');
  69 |   }
  70 | 
  71 |   // Dashboard Information
  72 |   async getDashboardTitle(): Promise<string> {
  73 |     return this.getText(this.dashboardTitle);
  74 |   }
  75 | 
  76 |   async getTotalWidgets(): Promise<number> {
  77 |     return this.getCount(this.dashboardCards);
  78 |   }
  79 | 
  80 |   // State
  81 |   async isDashboardDisplayed(): Promise<boolean> {
  82 |     return this.isVisible(this.dashboardTitle);
  83 |   }
  84 | 
  85 |   async isSearchVisible(): Promise<boolean> {
  86 |     return this.isVisible(this.searchBox);
  87 |   }
  88 | }
```