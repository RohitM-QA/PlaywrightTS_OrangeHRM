import { expect, test } from '@fixtures/testFixtures';
import { LoginPage } from '@pages/LoginPage';
//import loginData from '@data/loginData.json';

test.describe('Login - Smoke TEST', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('TC_001 - Verify Login page loads successfully', async ({ loginPage }) => {
    await loginPage.verifyLoginPageLoaded();

    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
    await expect(loginPage.orangeHRMLogo).toBeVisible();
    //await expect(loginPage.forgotPasswordLink).toBeVisible();
  });

  test('TC_002 - Login with valid Admin credentials', async ({ loginPage }) => {
    const dashboard = await loginPage.loginAsAdmin();
    await dashboard.verifyDashboardLoaded();
  });

  test('TC_003 - Verify Dashboard after login', async ({ loginPage }) => {
    const dashboard = await loginPage.loginAsAdmin();
    expect(await dashboard.isDashboardDisplayed()).toBeTruthy();
    await expect(dashboard.dashboardTitle).toBeVisible();
  });

  test('TC_004 - Verify Logout', async ({ loginPage }) => {
    const dashboard = await loginPage.loginAsAdmin();
    await dashboard.topBar.logout();
    await loginPage.verifyLoginPageLoaded();
  });

  test('TC_005 - Verify user can login again after logout', async({ loginPage}) =>{
    let dashboard = await loginPage.loginAsAdmin();
    await dashboard.topBar.logout();
    dashboard = await loginPage.loginAsAdmin();
    await dashboard.verifyDashboardLoaded();
  });




});