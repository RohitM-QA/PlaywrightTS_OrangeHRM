import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "@core/BaseComponent";

export class SidebarComponent extends BaseComponent {

    //Sidebar Items
    readonly sidebar: Locator;
    readonly collapseButton: Locator;
    readonly searchInput: Locator;

    //Menu Items
    readonly dashboardMenu: Locator;
    readonly adminMenu: Locator;
    readonly pimMenu: Locator;
    readonly leaveMenu: Locator;
    readonly timeMenu: Locator;
    readonly recruitmentMenu: Locator;
    readonly performanceMenu: Locator;
    readonly directoryMenu: Locator;
    readonly maintenanceMenu: Locator;
    readonly claimMenu: Locator;
    readonly buzzMenu: Locator;


    constructor(page: Page) {
        super(
            page,
            page.locator('.oxd-sidepanel')
        );

        this.sidebar = this.root;

        this.collapseButton = page.locator('button.oxd-icon-button');
        this.searchInput = page.getByPlaceholder('Search');
        this.dashboardMenu = page.getByRole('link', {
            name: 'Dashboard',
        });

        this.adminMenu = page.getByRole('link', {
            name: 'Admin',
        });

        this.pimMenu = page.getByRole('link', {
            name: 'PIM',
        });

        this.leaveMenu = page.getByRole('link', {
            name: 'Leave',
        });

        this.timeMenu = page.getByRole('link', {
            name: 'Time',
        });

        this.recruitmentMenu = page.getByRole('link', {
            name: 'Recruitment',
        });

        this.performanceMenu = page.getByRole('link', {
            name: 'Performance',
        });

        this.directoryMenu = page.getByRole('link', {
            name: 'Directory',
        });

        this.maintenanceMenu = page.getByRole('link', {
            name: 'Maintenance',
        });

        this.claimMenu = page.getByRole('link', {
            name: 'Claim',
        });

        this.buzzMenu = page.getByRole('link', {
            name: 'Buzz',
        });

    }

    //Navigation
    async openDashboard(): Promise<void> {
        await this.click(this.dashboardMenu);
    }

    async openAdmin(): Promise<void> {
        await this.click(this.adminMenu);
    }

    async openPIM(): Promise<void> {
        await this.click(this.pimMenu);
    }

    async openLeave(): Promise<void> {
        await this.click(this.leaveMenu);
    }

    async openTime(): Promise<void> {
        await this.click(this.timeMenu);
    }

    async openRecruitment(): Promise<void> {
        await this.click(this.recruitmentMenu);
    }

    async openPerformance(): Promise<void> {
        await this.click(this.performanceMenu);
    }

    async openDirectory(): Promise<void> {
        await this.click(this.directoryMenu);
    }

    async openMaintenace(): Promise<void> {
        await this.click(this.maintenanceMenu);
    }

    async openClaim(): Promise<void> {
        await this.click(this.claimMenu);
    }

    async openBuzz(): Promise<void> {
        await this.click(this.buzzMenu);
    }


    //Search
    async searchMenu(menu: string): Promise<void> {
        await this.fill(this.searchInput, menu);
    }

    async clearSearch(): Promise<void> {
        await this.searchInput.clear();
    }

    async searchAndOpen(menu: string): Promise<void> {

        await this.searchMenu(menu);

        await this.page
            .getByRole('link', {
                name: menu,
                exact: true,
            })
            .click();
    }

    //Verificatiion
    async verifySidebarLoaded(): Promise<void> {

        await this.waitUntilVisible();

        await this.expectVisible(
            this.dashboardMenu
        );

        await this.expectVisible(
            this.adminMenu
        );

        await this.expectVisible(
            this.pimMenu
        );

    }

    async isSearchVisible(): Promise<boolean> {
        return this.searchInput.isVisible();
    }

    async getVisibleMenuCount(): Promise<number> {

        return await this.root
            .locator('ul li')
            .count();

    }

}
