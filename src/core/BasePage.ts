import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigation
  async navigate(url: string): Promise<void> {
    await this.page.goto(url, {
      waitUntil: 'domcontentloaded',
    });
  }

  async reload(): Promise<void> {
    await this.page.reload();
  }

  async goBack(): Promise<void> {
    await this.page.goBack();
  }

  async goForward(): Promise<void> {
    await this.page.goForward();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }


  // Locator Helpers
  locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  getByRole(...args: Parameters<Page['getByRole']>): Locator {
    return this.page.getByRole(...args);
  }

  getByText(text: string): Locator {
    return this.page.getByText(text);
  }

  getByLabel(text: string): Locator {
    return this.page.getByLabel(text);
  }

  getByPlaceholder(text: string): Locator {
    return this.page.getByPlaceholder(text);
  }

  // Click Actions
  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async doubleClick(locator: Locator): Promise<void> {
    await locator.dblclick();
  }

  async rightClick(locator: Locator): Promise<void> {
    await locator.click({
      button: 'right',
    });
  }

  async hover(locator: Locator): Promise<void> {
    await locator.hover();
  }


  // Input Actions
  async fill(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  async clearAndFill(locator: Locator, value: string): Promise<void> {
    await locator.clear();
    await locator.fill(value);
  }

  async type(locator: Locator, value: string): Promise<void> {
    await locator.pressSequentially(value);
  }

  async press(locator: Locator, key: string): Promise<void> {
    await locator.press(key);
  }

  // Checkbox
  async check(locator: Locator): Promise<void> {
    await locator.check();
  }

  async uncheck(locator: Locator): Promise<void> {
    await locator.uncheck();
  }

  // Dropdown
  async selectByText(locator: Locator, text: string): Promise<void> {
    await locator.selectOption({
      label: text,
    });
  }

  async selectByValue(locator: Locator, value: string): Promise<void> {
    await locator.selectOption(value);
  }

  async selectByIndex(locator: Locator, index: number): Promise<void> {
    await locator.selectOption({
      index,
    });
  }

  // Waits
  async waitForVisible(locator: Locator): Promise<void> {
    await locator.waitFor({
      state: 'visible',
    });
  }

  async waitForHidden(locator: Locator): Promise<void> {
    await locator.waitFor({
      state: 'hidden',
    });
  }

  async waitForLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  async waitForUrl(url: string | RegExp): Promise<void> {
    await this.page.waitForURL(url);
  }

  // Read Values
  async getText(locator: Locator): Promise<string> {
    return (await locator.textContent())?.trim() ?? '';
  }

  async getValue(locator: Locator): Promise<string> {
    return locator.inputValue();
  }

  async getAttribute(
    locator: Locator,
    attribute: string,
  ): Promise<string | null> {
    return locator.getAttribute(attribute);
  }

  async getCount(locator: Locator): Promise<number> {
    return locator.count();
  }

  // State Checks
  async isVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  async isHidden(locator: Locator): Promise<boolean> {
    return locator.isHidden();
  }

  async isEnabled(locator: Locator): Promise<boolean> {
    return locator.isEnabled();
  }

  async isDisabled(locator: Locator): Promise<boolean> {
    return locator.isDisabled();
  }

  async isChecked(locator: Locator): Promise<boolean> {
    return locator.isChecked();
  }

  // Assertions
  async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async expectHidden(locator: Locator): Promise<void> {
    await expect(locator).toBeHidden();
  }

  async expectText(locator: Locator, text: string): Promise<void> {
    await expect(locator).toHaveText(text);
  }

  async expectValue(locator: Locator, value: string): Promise<void> {
    await expect(locator).toHaveValue(value);
  }

  async expectUrl(url: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }

  async expectTitle(title: string | RegExp): Promise<void> {
    await expect(this.page).toHaveTitle(title);
  }

  // Mouse Actions

  async dragAndDrop(source: Locator, target: Locator): Promise<void> {
    await source.dragTo(target);
  }

  async scrollIntoView(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }


  // Keyboard
  async keyboardPress(key: string): Promise<void> {
    await this.page.keyboard.press(key);
  }


  // Screenshot
  async takeScreenshot(path: string): Promise<void> {
    await this.page.screenshot({
      path,
      fullPage: true,
    });
  }


  // Browser
  async close(): Promise<void> {
    await this.page.close();
  }

  async bringToFront(): Promise<void> {
    await this.page.bringToFront();
  }
}