import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "@core/BaseComponent";

export class UserDropdownComponent extends BaseComponent {

    //User Profile
    readonly dropdownButton: Locator;
    readonly dropdownMenu: Locator;

    //Dropdown Menu Items
    readonly aboutMenu: Locator;
    readonly supportMenu: Locator;
    readonly changePasswordMenu: Locator;
    readonly logoutMenu: Locator;

    constructor(page: Page) {

        super(page,
            page.locator('.oxd-userdropdown')
        );

        this.dropdownButton = page.locator('.oxd-userdropdown-tab');
        this.dropdownMenu = page.locator('.oxd-dropdown-menu');
        
        this.aboutMenu = page.getByRole('link', {
            name: 'About',
        });

        this.supportMenu = page.getByRole('link', {
            name: 'Support',
        });

        this.changePasswordMenu = page.getByRole('link', {
            name: 'Change Password',
        });

        this.logoutMenu = page.getByRole('link', {
            name: 'Logout',
        });

    }

    //Open / Close:
    async open() : Promise<void> {
        if(! await this.dropdownButton.isVisible()) {
           await this.click(this.dropdownButton);
        }

        await this.expectVisible(this.dropdownButton);
    }

    async close() : Promise<void> {
        if(! await this.dropdownMenu.isVisible()) {
            await this.page.keyboard.press('Escape');
        }
    }

    //Navigation:
    async openAbout() : Promise<void> {
        await this.open();
        await this.click(this.aboutMenu);
    }

    async openSupport() : Promise<void> {
        await this.open();
        await this.click(this.supportMenu);
    }

    async changePassword() : Promise<void> {
        await this.open();
        await this.click(this.changePasswordMenu);
    }

    async logout() : Promise<void> {
        await this.open();
        await this.click(this.logoutMenu);
    }

    //Verification:
    async verifyOpened(): Promise<void> {

        await this.expectVisible(this.dropdownMenu);

    }

    async isOpened(): Promise<boolean> {

        return this.dropdownMenu.isVisible();

    }

    async getMenuItems(): Promise<string[]> {

        return await this.dropdownMenu
            .locator('li')
            .allTextContents();

    }


}