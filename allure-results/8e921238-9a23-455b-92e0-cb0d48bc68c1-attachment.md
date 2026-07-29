# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.ts >> Login - Smoke TEST >> TC_003 - Verify Dashboard after login
- Location: tests\smoke\login.spec.ts:27:7

# Error details

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "domcontentloaded"

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
  10  |   // Navigation
  11  |   async navigate(url: string): Promise<void> {
> 12  |     await this.page.goto(url, {
      |                     ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  13  |       waitUntil: 'domcontentloaded',
  14  |     });
  15  |   }
  16  | 
  17  |   async reload(): Promise<void> {
  18  |     await this.page.reload();
  19  |   }
  20  | 
  21  |   async goBack(): Promise<void> {
  22  |     await this.page.goBack();
  23  |   }
  24  | 
  25  |   async goForward(): Promise<void> {
  26  |     await this.page.goForward();
  27  |   }
  28  | 
  29  |   async getCurrentUrl(): Promise<string> {
  30  |     return this.page.url();
  31  |   }
  32  | 
  33  |   async getTitle(): Promise<string> {
  34  |     return this.page.title();
  35  |   }
  36  | 
  37  | 
  38  |   // Locator Helpers
  39  |   locator(selector: string): Locator {
  40  |     return this.page.locator(selector);
  41  |   }
  42  | 
  43  |   getByRole(...args: Parameters<Page['getByRole']>): Locator {
  44  |     return this.page.getByRole(...args);
  45  |   }
  46  | 
  47  |   getByText(text: string): Locator {
  48  |     return this.page.getByText(text);
  49  |   }
  50  | 
  51  |   getByLabel(text: string): Locator {
  52  |     return this.page.getByLabel(text);
  53  |   }
  54  | 
  55  |   getByPlaceholder(text: string): Locator {
  56  |     return this.page.getByPlaceholder(text);
  57  |   }
  58  | 
  59  |   // Click Actions
  60  |   async click(locator: Locator): Promise<void> {
  61  |     await locator.click();
  62  |   }
  63  | 
  64  |   async doubleClick(locator: Locator): Promise<void> {
  65  |     await locator.dblclick();
  66  |   }
  67  | 
  68  |   async rightClick(locator: Locator): Promise<void> {
  69  |     await locator.click({
  70  |       button: 'right',
  71  |     });
  72  |   }
  73  | 
  74  |   async hover(locator: Locator): Promise<void> {
  75  |     await locator.hover();
  76  |   }
  77  | 
  78  | 
  79  |   // Input Actions
  80  |   async fill(locator: Locator, value: string): Promise<void> {
  81  |     await locator.fill(value);
  82  |   }
  83  | 
  84  |   async clearAndFill(locator: Locator, value: string): Promise<void> {
  85  |     await locator.clear();
  86  |     await locator.fill(value);
  87  |   }
  88  | 
  89  |   async type(locator: Locator, value: string): Promise<void> {
  90  |     await locator.pressSequentially(value);
  91  |   }
  92  | 
  93  |   async press(locator: Locator, key: string): Promise<void> {
  94  |     await locator.press(key);
  95  |   }
  96  | 
  97  |   // Checkbox
  98  |   async check(locator: Locator): Promise<void> {
  99  |     await locator.check();
  100 |   }
  101 | 
  102 |   async uncheck(locator: Locator): Promise<void> {
  103 |     await locator.uncheck();
  104 |   }
  105 | 
  106 |   // Dropdown
  107 |   async selectByText(locator: Locator, text: string): Promise<void> {
  108 |     await locator.selectOption({
  109 |       label: text,
  110 |     });
  111 |   }
  112 | 
```