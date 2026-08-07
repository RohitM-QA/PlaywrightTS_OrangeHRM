# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\admin.spec.ts >> Admin Module - Smoke Tests >> TC_001 - Should open Admin page successfully
- Location: tests\smoke\admin.spec.ts:13:9

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Admin' })

```

# Test source

```ts
  1   | import { expect, Locator, Page } from '@playwright/test';
  2   | 
  3   | export abstract class BaseComponent {
  4   |   protected readonly page: Page;
  5   |   protected readonly root: Locator;
  6   | 
  7   |   constructor(page: Page, root: Locator) {
  8   |     this.page = page;
  9   |     this.root = root;
  10  |   }
  11  | 
  12  |   // ======================================================
  13  |   // Component State
  14  |   // ======================================================
  15  | 
  16  |   async waitUntilVisible(): Promise<void> {
  17  |     await this.root.waitFor({
  18  |       state: 'visible',
  19  |     });
  20  |   }
  21  | 
  22  |   async waitUntilHidden(): Promise<void> {
  23  |     await this.root.waitFor({
  24  |       state: 'hidden',
  25  |     });
  26  |   }
  27  | 
  28  |   async isVisible(): Promise<boolean> {
  29  |     return this.root.isVisible();
  30  |   }
  31  | 
  32  |   async isHidden(): Promise<boolean> {
  33  |     return this.root.isHidden();
  34  |   }
  35  | 
  36  |   // ======================================================
  37  |   // Component Locators
  38  |   // ======================================================
  39  | 
  40  |   protected locator(selector: string): Locator {
  41  |     return this.root.locator(selector);
  42  |   }
  43  | 
  44  |   protected getByRole(...args: Parameters<Locator['getByRole']>): Locator {
  45  |     return this.root.getByRole(...args);
  46  |   }
  47  | 
  48  |   protected getByText(text: string): Locator {
  49  |     return this.root.getByText(text);
  50  |   }
  51  | 
  52  |   protected getByLabel(text: string): Locator {
  53  |     return this.root.getByLabel(text);
  54  |   }
  55  | 
  56  |   protected getByPlaceholder(text: string): Locator {
  57  |     return this.root.getByPlaceholder(text);
  58  |   }
  59  | 
  60  |   // ======================================================
  61  |   // Common Actions
  62  |   // ======================================================
  63  | 
  64  |   protected async click(locator: Locator): Promise<void> {
> 65  |     await locator.click();
      |                   ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  66  |   }
  67  | 
  68  |   protected async fill(locator: Locator, value: string): Promise<void> {
  69  |     await locator.fill(value);
  70  |   }
  71  | 
  72  |   protected async hover(locator: Locator): Promise<void> {
  73  |     await locator.hover();
  74  |   }
  75  | 
  76  |   protected async getText(locator: Locator): Promise<string> {
  77  |     return (await locator.textContent())?.trim() ?? '';
  78  |   }
  79  | 
  80  |   protected async getCount(locator: Locator): Promise<number> {
  81  |     return locator.count();
  82  |   }
  83  | 
  84  |   // ======================================================
  85  |   // Assertions
  86  |   // ======================================================
  87  | 
  88  |   protected async expectVisible(locator: Locator): Promise<void> {
  89  |     await expect(locator).toBeVisible();
  90  |   }
  91  | 
  92  |   protected async expectText(locator: Locator, expected: string): Promise<void> {
  93  |     await expect(locator).toHaveText(expected);
  94  |   }
  95  | 
  96  |   protected async expectCount(locator: Locator, count: number): Promise<void> {
  97  |     await expect(locator).toHaveCount(count);
  98  |   }
  99  | }
  100 | 
  101 | 
  102 | //Example 1 – Sidebar Component
  103 |      //src/components/SidebarComponent.ts
  104 | 
  105 | //      //
  106 | //      import { Page } from '@playwright/test';
  107 | 
  108 | // import { BaseComponent } from '@core/BaseComponent';
  109 | 
  110 | // export class SidebarComponent extends BaseComponent {
  111 | //   constructor(page: Page) {
  112 | //     super(page, page.locator('.oxd-sidepanel'));
  113 | //   }
  114 | 
  115 | //   readonly adminMenu = this.getByRole('link', {
  116 | //     name: 'Admin',
  117 | //   });
  118 | 
  119 | //   readonly pimMenu = this.getByRole('link', {
  120 | //     name: 'PIM',
  121 | //   });
  122 | 
  123 | //   readonly leaveMenu = this.getByRole('link', {
  124 | //     name: 'Leave',
  125 | //   });
  126 | 
  127 | //   async openAdmin(): Promise<void> {
  128 | //     await this.click(this.adminMenu);
  129 | //   }
  130 | 
  131 | //   async openPIM(): Promise<void> {
  132 | //     await this.click(this.pimMenu);
  133 | //   }
  134 | 
  135 | //   async openLeave(): Promise<void> {
  136 | //     await this.click(this.leaveMenu);
  137 | //   }
  138 | // }
  139 | //
  140 | 
  141 | 
  142 | // Example 2 – Top Navigation Component
  143 | // src/components/TopBarComponent.ts
  144 | // import { Page } from '@playwright/test';
  145 | 
  146 | // import { BaseComponent } from '@core/BaseComponent';
  147 | 
  148 | // export class TopBarComponent extends BaseComponent {
  149 | //   constructor(page: Page) {
  150 | //     super(page, page.locator('.oxd-topbar'));
  151 | //   }
  152 | 
  153 | //   readonly userDropdown = this.getByRole('img');
  154 | 
  155 | //   readonly logout = this.getByText('Logout');
  156 | 
  157 | //   async logoutFromApplication(): Promise<void> {
  158 | //     await this.click(this.userDropdown);
  159 | //     await this.click(this.logout);
  160 | //   }
  161 | // }
  162 | // Using Components Inside a Page
  163 | 
  164 | // Example DashboardPage.ts:
  165 | 
```