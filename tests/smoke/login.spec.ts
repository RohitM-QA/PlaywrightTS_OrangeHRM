import { test, expect } from '@fixtures/testFixtures';
import loginData from '@data/loginData.json';

test.describe('Login - Smoke Tests', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.verifyLoginPageLoaded();
  });

  test('SMK-001 | Admin should login successfully', async ({ loginPage }) => {
    const admin = loginData.validUsers[0];

    const dashboard = await loginPage.login(
      admin.username,
      admin.password,
    );

    await dashboard.verifyDashboardLoaded();

    expect(await dashboard.isDashboardDisplayed()).toBeTruthy();
  });

  test('SMK-002 | Admin should logout successfully', async ({ loginPage }) => {
    const admin = loginData.validUsers[0];

    const dashboard = await loginPage.login(
      admin.username,
      admin.password,
    );

    await dashboard.verifyDashboardLoaded();

    await dashboard.topBar.logoutFromApplication();

    await loginPage.verifyLoginPageLoaded();
  });

  test('SMK-003 | Dashboard should display all mandatory components after login',
    async ({ loginPage }) => {

      const admin = loginData.validUsers[0];

      const dashboard = await loginPage.login(
        admin.username,
        admin.password,
      );

      await dashboard.verifyDashboardLoaded();

      expect(await dashboard.isSearchVisible()).toBeTruthy();

      expect(await dashboard.sidebar.isVisible()).toBeTruthy();

      expect(await dashboard.topBar.isVisible()).toBeTruthy();
    });

});