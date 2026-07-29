# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.ts >> Login - Smoke TEST >> TC_002 - Login with valid Admin credentials
- Location: tests\smoke\login.spec.ts:22:26

# Error details

```
TypeError: Cannot read properties of undefined (reading 'expectVisible')
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Kirubakaran Loganathan
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - button "" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
  - generic [ref=e135]:
    - generic [ref=e137]:
      - generic [ref=e139]:
        - generic [ref=e141]:
          - generic [ref=e142]: 
          - paragraph [ref=e143]: Time at Work
        - separator [ref=e144]
      - generic [ref=e148]:
        - generic [ref=e150]:
          - generic [ref=e151]: 
          - paragraph [ref=e152]: My Actions
        - separator [ref=e153]
        - generic [ref=e155]:
          - img "No Content"
          - paragraph [ref=e156]: No Pending Actions to Perform
      - generic [ref=e158]:
        - generic [ref=e160]:
          - generic [ref=e161]: 
          - paragraph [ref=e162]: Quick Launch
        - separator [ref=e163]
      - generic [ref=e167]:
        - generic [ref=e169]:
          - generic [ref=e170]: 
          - paragraph [ref=e171]: Buzz Latest Posts
        - separator [ref=e172]
      - generic [ref=e176]:
        - generic [ref=e177]:
          - paragraph [ref=e182]: Employees on Leave Today
          - generic [ref=e183] [cursor=pointer]: 
        - separator [ref=e184]
      - generic [ref=e188]:
        - generic [ref=e190]:
          - generic [ref=e191]: 
          - paragraph [ref=e192]: Employee Distribution by Sub Unit
        - separator [ref=e193]
      - generic [ref=e197]:
        - generic [ref=e199]:
          - generic [ref=e200]: 
          - paragraph [ref=e201]: Employee Distribution by Location
        - separator [ref=e202]
    - generic [ref=e205]:
      - paragraph [ref=e206]: OrangeHRM OS 5.9
      - paragraph [ref=e207]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e208] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
> 35 |     this.dashboardTitle = page.getByRole('heading', {
     |                           ^ TypeError: Cannot read properties of undefined (reading 'expectVisible')
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
  51 |     await this.assertions.expectVisible(
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