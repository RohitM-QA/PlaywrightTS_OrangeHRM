import { expect, Locator, Page } from '@playwright/test';

export class BaseAssertions {
  constructor(private readonly page: Page) {}

  // ======================================================
  // Page Assertions
  // ======================================================

  async expectTitle(title: string | RegExp): Promise<void> {
    await expect(this.page).toHaveTitle(title);
  }

  async expectUrl(url: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }

  async expectUrlContains(text: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(text));
  }

  // ======================================================
  // Visibility
  // ======================================================

  async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async expectHidden(locator: Locator): Promise<void> {
    await expect(locator).toBeHidden();
  }

  async expectEnabled(locator: Locator): Promise<void> {
    await expect(locator).toBeEnabled();
  }

  async expectDisabled(locator: Locator): Promise<void> {
    await expect(locator).toBeDisabled();
  }

  async expectEditable(locator: Locator): Promise<void> {
    await expect(locator).toBeEditable();
  }

  async expectReadOnly(locator: Locator): Promise<void> {
    await expect(locator).toBeEditable({ editable: false });
  }

  // ======================================================
  // Text
  // ======================================================

  async expectText(locator: Locator, text: string): Promise<void> {
    await expect(locator).toHaveText(text);
  }

  async expectContainsText(locator: Locator, text: string): Promise<void> {
    await expect(locator).toContainText(text);
  }

  async expectEmpty(locator: Locator): Promise<void> {
    await expect(locator).toBeEmpty();
  }

  // ======================================================
  // Input
  // ======================================================

  async expectValue(locator: Locator, value: string): Promise<void> {
    await expect(locator).toHaveValue(value);
  }

  async expectPlaceholder(locator: Locator, value: string): Promise<void> {
    await expect(locator).toHaveAttribute('placeholder', value);
  }

  // ======================================================
  // Checkbox
  // ======================================================

  async expectChecked(locator: Locator): Promise<void> {
    await expect(locator).toBeChecked();
  }

  async expectNotChecked(locator: Locator): Promise<void> {
    await expect(locator).not.toBeChecked();
  }

  // ======================================================
  // Count
  // ======================================================

  async expectCount(locator: Locator, count: number): Promise<void> {
    await expect(locator).toHaveCount(count);
  }

  // ======================================================
  // Attributes
  // ======================================================

  async expectAttribute(
    locator: Locator,
    attribute: string,
    value: string,
  ): Promise<void> {
    await expect(locator).toHaveAttribute(attribute, value);
  }

  async expectClassContains(
    locator: Locator,
    className: string,
  ): Promise<void> {
    await expect(locator).toHaveClass(new RegExp(className));
  }

  // ======================================================
  // Screenshot
  // ======================================================

  async expectScreenshot(name: string): Promise<void> {
    await expect(this.page).toHaveScreenshot(name);
  }
}