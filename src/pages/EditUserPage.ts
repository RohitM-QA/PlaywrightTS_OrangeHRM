import { Locator, Page } from '@playwright/test';
import { BasePage } from '@core/BasePage';
import { ToastComponent } from '@components/ToastComponent';
import { UserFormComponent } from '@components/UserFormComponent';
import { User } from '@models/User';
import { AdminPage } from './AdminPage';

export class EditUserPage extends BasePage {
    readonly pageTitle: Locator;
    readonly form: UserFormComponent;
    readonly toast: ToastComponent;

    constructor(page: Page) {
        super(page);

        this.pageTitle = page.getByRole('heading', {
            name: 'Edit User'
        });

        this.form = new UserFormComponent(page);
        this.toast = new ToastComponent(page);

    }

    async verifyLoaded(): Promise<void> {
        await this.expectVisible(this.pageTitle);
    }

    async updateUser(
        user: User
    ): Promise<AdminPage> {
        await this.form.fillForm(user);
        await this.form.save();
        await this.toast.verifySuccess();
        return new AdminPage(this.page);

    }

}