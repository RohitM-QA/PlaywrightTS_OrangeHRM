import { Locator, Page, expect } from "@playwright/test";
import { BaseComponent } from "@core/BaseComponent";

export class DropdownComponent extends BaseComponent {
    readonly dropdown: Locator;
    readonly selectedValue: Locator;
    readonly options: Locator;

    constructor(page: Page, dropdown: Locator) {

        super(page, dropdown);
        this.dropdown = dropdown;

        this.selectedValue = dropdown.locator('.oxd-select-text-input');
        this.options = page.locator('.oxd-select-dropdown > *');
    }

    //Actions:

    async open(): Promise<void> {
        await this.dropdown.click();
        await expect(this.options.first()).toBeVisible();
    }

    async close(): Promise<void> {
        await this.page.keyboard.press('Escape');
    }

    async select(option: string): Promise<void> {
        await this.open();
        await this.page.getByRole('option', { name: option, exact: true }).click();
    };

    async selectByIndex(index: number): Promise<void> {
        await this.open();
        await this.options.nth(index).click();

    }

    async selectFirst(): Promise<void> {
        await this.selectByIndex(0);
    }

    async selectLast(): Promise<void> {
        await this.open();
        const count = await this.options.count();
        await this.options.nth(count - 1).click();
    }

    // Information:
    async getSelectedValue(): Promise<string> {
        return (
            await this.selectedValue.textContent())?.trim() ?? '';
    }

    async getOptions(): Promise<string[]> {
        await this.open();
        return await this.options.allTextContents();
    }

    async getOptionCount(): Promise<number> {
        await this.open();
        return this.options.count();
    }

    // Verification:
    async verifySelected(expected: string): Promise<void> {
        await expect(this.selectedValue).toHaveText(expected);
    }

    async verifyOptionExists(option: string): Promise<void> {

        await this.open();
        await expect(this.page
            .getByRole('option',
                {
                    name: option,
                    exact: true
                }
            )
        ).toBeVisible();

    }

    async isOptionPresent(option: string): Promise<boolean> {

        await this.open();
        return await this.page
            .getByRole(
                'option',
                {
                    name: option,
                    exact: true
                }
            )
            .isVisible();

    }







}