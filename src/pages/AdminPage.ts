import { Locator, Page } from '@playwright/test';
import { BasePage } from '@core/BasePage'
import { SidebarComponent } from '@components/SidebarComponent';
import { TopBarComponent } from '@components/TopBarComponent';
import { UserDropdownComponent } from '@components/UserDropdownComponent ';
import { ModalComponent } from '@components/ModalComponents';
import { ToastComponent } from '@components/ToastComponent';



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

    constructor(page : Page) {
        super(page);

        this.pageTitle = page.getByRole('heading', {name: 'Admin'});
        this.usernameInput = page.locator('.oxd-input').nth(1);
        this.employeeNameInput = page.getByPlaceholder('Type for hints...');
    }







}