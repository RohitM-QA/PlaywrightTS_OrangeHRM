import { Locator, Page } from '@playwright/test';
import { BasePage } from '@core/BasePage'
import { SidebarComponent } from '@components/SidebarComponent';
import { TopBarComponent } from '@components/TopBarComponent';
import { UserDropdownComponent } from '@components/UserDropdownComponent ';
import { ModalComponent } from '@components/ModalComponents';
import { ToastComponent } from '@components/ToastComponent';
import { DropdownComponent } from '@components/DropdownComponent';
import { TableComponent } from '@components/TableComponents';
import { UserSearch } from 'src/models/UserSearch';
import { AddUserPage } from './AddUserPage';
import { EditUserPage } from './EditUserPage';



export class AdminPage extends BasePage {

    //Components:
    readonly sidebar: SidebarComponent;
    readonly topBar: TopBarComponent;
    readonly userMenu: UserDropdownComponent;
    readonly modal: ModalComponent;
    readonly toast: ToastComponent;

    //Page Locators:

    readonly pageTitle: Locator;
    readonly usernameInput: Locator;
    readonly employeeNameInput: Locator;
    readonly searchButton: Locator;
    readonly resetButton: Locator;
    readonly addButton: Locator;

    readonly userRole: DropdownComponent;
    readonly status: DropdownComponent;
    readonly usersTable: TableComponent;

    constructor(page: Page) {
        super(page);

        //Components:
        this.sidebar = new SidebarComponent(page);
        this.topBar = new TopBarComponent(page);
        this.userMenu = new UserDropdownComponent(page);
        this.modal = new ModalComponent(page);
        this.toast = new ToastComponent(page);

        //Locators:
        this.pageTitle = page.getByRole('heading', { name: 'Admin' });
        this.usernameInput = page.locator('.oxd-input').nth(1);
        this.employeeNameInput = page.getByPlaceholder('Type for hints...');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.resetButton = page.getByRole('button', { name: 'Reset' });
        this.addButton = page.getByRole('button', { name: 'Add ' });

        this.userRole = new DropdownComponent(page, page.locator('.oxd-select-wrapper').nth(0));
        this.status = new DropdownComponent(page, page.locator('.oxd-select-wrapper').nth(1));
        this.usersTable = new TableComponent(page, page.locator('.oxd-table'));

    }

    //Navigation:
    async goto(): Promise<void> {
        await this.sidebar.openAdmin();
        await this.verifyLoaded();
    }

    //Verification:
    async verifyLoaded(): Promise<void> {
        await this.expectVisible(this.pageTitle);
        await this.usersTable.verifyVisible();
    }

    //Search:
    async search(criteria: UserSearch): Promise<void> {

        if (criteria.username) {
            await this.fill(this.usernameInput, criteria.username);
        }

        if (criteria.employeeName) {
            await this.fill(this.employeeNameInput, criteria.employeeName);
        }

        if (criteria.userRole) {
            await this.userRole.select(criteria.userRole);
        }

        if (criteria.status) {
            await this.status.select(criteria.status);
        }

        await this.click(
            this.searchButton
        );

    }

    async reset(): Promise<void> {
        await this.click(
            this.resetButton
        );

    }

    //Actions:
    async clickAdd(): Promise<AddUserPage> {
        await this.click(this.addButton);

        return new AddUserPage(this.page);
    }

    async clickEdit(username: string): Promise<EditUserPage> {
        await this.usersTable.clickEdit(username);

        return new EditUserPage(this.page);
    }

    async deleteUser(username: string): Promise<void> {
        await this.usersTable.clickDelete(username);
        await this.modal.confirm();
        await this.toast.verifySuccess();
    }

    //TableListing:
    async userExists(username: string): Promise<boolean> {

        return this.usersTable.contains(username);

    }

    async verifyUserExists(username: string): Promise<void> {

        await this.usersTable.verifyContains(username);

    }

    async getUserCount(): Promise<number> {

        return this.usersTable.getRowCount();

    }









}