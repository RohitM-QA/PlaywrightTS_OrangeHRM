# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional\login.username.spec.ts >> Login - Username Functional TEST >> TC_015 - Verify user can enter a valid username
- Location: tests\functional\login.username.spec.ts:9:9

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

```
TimeoutError: page.goto: Timeout 60000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1   | import { expect, Locator, Page } from '@playwright/test';
  2   | 
  3   | export abstract class BasePage {
  4   |   protected readonly page: Page;
  5   | 
  6   |   constructor(page: Page) {
  7   |     this.page = page;
  8   |   }
  9   | 
  10  |   //Navigation
  11  |   // async navigate(url: string): Promise<void> {
  12  |   //   await this.page.goto(url, {
  13  |   //     waitUntil: 'domcontentloaded',
  14  |   //   });
  15  |   // }
  16  | 
  17  |   async navigate(url: string): Promise<void> {
> 18  |     await this.page.goto(url, {
      |                     ^ TimeoutError: page.goto: Timeout 60000ms exceeded.
  19  |       waitUntil: 'load',
  20  |       timeout: 60000,
  21  |     });
  22  |   }
  23  | 
  24  |   async reload(): Promise<void> {
  25  |     await this.page.reload();
  26  |   }
  27  | 
  28  |   async goBack(): Promise<void> {
  29  |     await this.page.goBack();
  30  |   }
  31  | 
  32  |   async goForward(): Promise<void> {
  33  |     await this.page.goForward();
  34  |   }
  35  | 
  36  |   async getCurrentUrl(): Promise<string> {
  37  |     return this.page.url();
  38  |   }
  39  | 
  40  |   async getTitle(): Promise<string> {
  41  |     return this.page.title();
  42  |   }
  43  | 
  44  | 
  45  |   // Locator Helpers
  46  |   locator(selector: string): Locator {
  47  |     return this.page.locator(selector);
  48  |   }
  49  | 
  50  |   getByRole(...args: Parameters<Page['getByRole']>): Locator {
  51  |     return this.page.getByRole(...args);
  52  |   }
  53  | 
  54  |   getByText(text: string): Locator {
  55  |     return this.page.getByText(text);
  56  |   }
  57  | 
  58  |   getByLabel(text: string): Locator {
  59  |     return this.page.getByLabel(text);
  60  |   }
  61  | 
  62  |   getByPlaceholder(text: string): Locator {
  63  |     return this.page.getByPlaceholder(text);
  64  |   }
  65  | 
  66  |   // Click Actions
  67  |   async click(locator: Locator): Promise<void> {
  68  |     await locator.click();
  69  |   }
  70  | 
  71  |   async doubleClick(locator: Locator): Promise<void> {
  72  |     await locator.dblclick();
  73  |   }
  74  | 
  75  |   async rightClick(locator: Locator): Promise<void> {
  76  |     await locator.click({
  77  |       button: 'right',
  78  |     });
  79  |   }
  80  | 
  81  |   async hover(locator: Locator): Promise<void> {
  82  |     await locator.hover();
  83  |   }
  84  | 
  85  | 
  86  |   // Input Actions
  87  |   async fill(locator: Locator, value: string): Promise<void> {
  88  |     await locator.fill(value);
  89  |   }
  90  | 
  91  |   async clearAndFill(locator: Locator, value: string): Promise<void> {
  92  |     await locator.clear();
  93  |     await locator.fill(value);
  94  |   }
  95  | 
  96  |   async type(locator: Locator, value: string): Promise<void> {
  97  |     await locator.pressSequentially(value);
  98  |   }
  99  | 
  100 |   async press(locator: Locator, key: string): Promise<void> {
  101 |     await locator.press(key);
  102 |   }
  103 | 
  104 |   // Checkbox
  105 |   async check(locator: Locator): Promise<void> {
  106 |     await locator.check();
  107 |   }
  108 | 
  109 |   async uncheck(locator: Locator): Promise<void> {
  110 |     await locator.uncheck();
  111 |   }
  112 | 
  113 |   // Dropdown
  114 |   async selectByText(locator: Locator, text: string): Promise<void> {
  115 |     await locator.selectOption({
  116 |       label: text,
  117 |     });
  118 |   }
```