import { test as base, expect } from '@playwright/test';

import { LoginPage } from '@pages/LoginPage';
import { DashboardPage } from '@pages/DashboardPage';
import { AdminPage } from '@pages/AdminPage';
import { AddUserPage } from '@pages/AddUserPage';
import { EditUserPage } from '@pages/EditUserPage';

type AppFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    adminPage: AdminPage;
    addUserPage: AddUserPage;
    editUserPage: EditUserPage;
};

export const test = base.extend<AppFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },

    adminPage: async ({ page }, use) => {
        await use(new AdminPage(page));
    },

    addUserPage: async ({ page }, use) => {
        await use(new AddUserPage(page));
    },

    editUserPage: async ({ page }, use) => {
        await use(new EditUserPage(page));
    }

});

export { expect };