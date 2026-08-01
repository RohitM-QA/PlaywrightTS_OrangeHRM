import { Locator, Page } from '@playwright/test';
import { BaseComponent } from '@core/BaseComponent';

export class SearchComponent extends BaseComponent {

    readonly searchInput: Locator;
    readonly clearButton: Locator;

    constructor(page: Page) {

        super(
            page,
            page.locator('.oxd-main')
        );

        this.searchInput = page.getByPlaceholder('Search');
        this.clearButton = page.locator(
            '.oxd-input-group .oxd-input + i'
        );
    }

    //Search:
    async search(text: string): Promise<void> {
        await this.fill(
            this.searchInput, text
        );
    }

    async clear(): Promise<void> {
        await this.searchInput.clear();
    }

    async searchAndPressEnter(text: string): Promise<void> {
        await this.search(text);
        await this.page.keyboard.press('Enter');
    };


    //Verification:

    async getValue(): Promise<string> {
        return await this.searchInput.inputValue();
    }

    async isEmpty(): Promise<boolean> {
        return (
            await this.getValue()
        ) === '';
    }

    async verifyVisible(): Promise<void> {
        await this.expectVisible(
            this.searchInput
        );
    }





}