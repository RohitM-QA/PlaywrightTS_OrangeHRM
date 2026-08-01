import { Locator, Page } from '@playwright/test';

import { BaseComponent } from '@core/BaseComponent';

export enum ToastType {
    SUCCESS = 'Success',
    ERROR = 'Error',
    WARNING = 'Warning',
    INFO = 'Info'
}

export class ToastComponent extends BaseComponent {


    readonly toast: Locator;
    readonly title: Locator;
    readonly message: Locator;
    readonly closeButton: Locator;

    constructor(page: Page) {

        super(
            page,
            page.locator('.oxd-toast')
        );

        this.toast = this.root;
        this.title = this.root.locator('.oxd-toast-content-text');
        this.message = this.root.locator('.oxd-toast-content-text p');
        this.closeButton = this.root.locator('button');

    }


    // Wait  

    async waitForToast(): Promise<void> {
        await this.waitUntilVisible();

    }

    async waitUntilClosed(): Promise<void> {
        await this.waitUntilHidden();

    }


    // Information 

    async getTitle(): Promise<string> {
        return await this.title.innerText();

    }

    async getMessage(): Promise<string> {
        return await this.message.innerText();

    }

    async getToastText(): Promise<string> {
        return await this.toast.innerText();

    }


    // Verification

    async verifyVisible(): Promise<void> {
        await this.expectVisible(
            this.toast
        );

    }

    async verifySuccess(): Promise<void> {
        await this.verifyVisible();
        await this.expectText(
            this.title,
            ToastType.SUCCESS
        );

    }

    async verifyError(): Promise<void> {
        await this.verifyVisible();
        await this.expectText(
            this.title,
            ToastType.ERROR
        );

    }

    async verifyWarning(): Promise<void> {
        await this.verifyVisible();
        await this.expectText(
            this.title,
            ToastType.WARNING
        );

    }

    async verifyInfo(): Promise<void> {
        await this.verifyVisible();
        await this.expectText(
            this.title,
            ToastType.INFO
        );

    }

    async verifyMessage(
        expected: string
    ): Promise<void> {

        await this.expectText(
            this.message,
            expected
        );

    }


    // Actions
    async close(): Promise<void> {
        if (await this.closeButton.isVisible()) {
            await this.click(
                this.closeButton
            );

        }

    }

}