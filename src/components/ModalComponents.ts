import { expect, Locator, Page } from '@playwright/test';
import { BaseComponent } from '@core/BaseComponent';

export class ModalComponent extends BaseComponent {


    // Root    
    readonly modal: Locator;
    readonly title: Locator;
    readonly body: Locator;
    readonly closeButton: Locator;
    readonly cancelButton: Locator;
    readonly confirmButton: Locator;

    constructor(
        page: Page
    ) {

        super(
            page,
            page.locator('.oxd-dialog-container')
        );

        this.modal = this.root;
        this.title = this.root.locator('.oxd-dialog-title');
        this.body = this.root.locator('.oxd-dialog-content');
        this.closeButton = this.root.locator('button').first();
        this.cancelButton = this.root.getByRole('button', {
            name: 'Cancel'
        });

        this.confirmButton = this.root.getByRole('button', {
            name: /Yes|Delete|Confirm/i
        });

    }


    // Wait   

    async waitForOpen(): Promise<void> {
        await this.waitUntilVisible();

    }

    async waitForClose(): Promise<void> {
        await this.waitUntilHidden();

    }


    // Information    

    async getTitle(): Promise<string> {
        return (
            await this.title.textContent()
        )?.trim() ?? '';

    }

    async getBodyText(): Promise<string> {
        return (
            await this.body.textContent()
        )?.trim() ?? '';

    }


    // Verification    

    async verifyVisible(): Promise<void> {
        await this.expectVisible(
            this.modal
        );

    }

    async verifyTitle(
        expected: string
    ): Promise<void> {

        await expect(
            this.title
        ).toHaveText(expected);

    }

    async verifyBodyContains(
        expected: string
    ): Promise<void> {

        await expect(
            this.body
        ).toContainText(expected);

    }

    // Actions    
    async confirm(): Promise<void> {
        await this.click(
            this.confirmButton
        );

        await this.waitForClose();
    }

    async cancel(): Promise<void> {
        await this.click(
            this.cancelButton
        );

        await this.waitForClose();
    }

    async close(): Promise<void> {

        await this.click(
            this.closeButton
        );
        await this.waitForClose();
    }

}