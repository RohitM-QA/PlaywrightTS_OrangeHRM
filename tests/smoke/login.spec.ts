import { expect, test } from '@fixtures/testFixtures';
//import loginData from '@data/loginData.json';

test.describe('Login - Smoke TEST', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.verifyLoginPageLoaded();
  });

  test('TC_001 - Admin should login successfully', async ({ loginPage }) => {
    //const admin = loginData.validUsers[0];

    const dashboard = await loginPage.loginAsAdmin();

    await dashboard.verifyDashboardLoaded();
    expect(await dashboard.isDashboardDisplayed()).toBeTruthy();
  });




});