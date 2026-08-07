import { Locator, Page } from '@playwright/test';
import { BaseComponent } from '@core/BaseComponent';
import { DropdownComponent } from '@components/DropdownComponent';
import { User } from '@models/User';

export class UserFormComponent extends BaseComponent {


    // Form Fields:
    readonly userRole: DropdownComponent;
    readonly status: DropdownComponent;
    readonly employeeNameInput: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly saveButton: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {

        super(page, page.locator('form'));

        this.userRole = new DropdownComponent(
            page,
            page.locator('.oxd-select-wrapper').nth(0)
        );

        this.status = new DropdownComponent(
            page,
            page.locator('.oxd-select-wrapper').nth(1)
        );

        this.employeeNameInput =
            page.getByPlaceholder('Type for hints...');

        this.usernameInput =
            page.locator('.oxd-input').nth(1);

        this.passwordInput =
            page.locator('input[type="password"]').nth(0);

        this.confirmPasswordInput =
            page.locator('input[type="password"]').nth(1);

        this.saveButton = page.getByRole('button', {
            name: 'Save'
        });

        this.cancelButton = page.getByRole('button', {
            name: 'Cancel'
        });

    }


    // Employee    
    async selectEmployee(employeeName: string): Promise<void> {

        await this.fill(this.employeeNameInput, employeeName);
        await this.page.getByRole('option').first().click();
    }

    // Form:    
    async fillForm(
        user: User
    ): Promise<void> {

        await this.userRole.select(
            user.userRole
        );

        await this.selectEmployee(
            user.employeeName
        );

        await this.fill(
            this.usernameInput,
            user.username
        );

        await this.status.select(
            user.status
        );

        await this.fill(
            this.passwordInput,
            user.password
        );

        await this.fill(
            this.confirmPasswordInput,
            user.confirmPassword ?? user.password
        );

    }

    async save(): Promise<void> {
        await this.click(this.saveButton);
    }

    async cancel(): Promise<void> {
        await this.click(this.cancelButton);
    }


    // Validation    
    async getValidationMessages(): Promise<string[]> {
        return this.page.locator('.oxd-input-field-error-message').allTextContents();

    }
    async hasValidationErrors(): Promise<boolean> {
        return (await this.page.locator('.oxd-input-field-error-message').count()) > 0;
    }

}