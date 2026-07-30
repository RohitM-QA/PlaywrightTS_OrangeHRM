import { expect, test } from '@fixtures/testFixtures';
//import { LoginPage } from '@pages/LoginPage';

test.describe('Login - Functional TEST', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  })


  test('TC_006 - Verify Login page title', async ({ loginPage }) => {
    expect(await loginPage.getPageTitle()).toContain("OrangeHRM");
  });

  test('TC_007 - Verify Login page URL', async ({ loginPage }) => {
    await loginPage.goto();
    expect(await loginPage.getCurrentUrl()).toContain('/auth/login');
  });

  test('TC_008 - Verify OrangeHRM logo is visible', async ({ loginPage }) => {
    //await expect(loginPage.orangeHRMLogo).toBeVisible();
    await loginPage.verifyLogoVisible();
  });

  test('TC_009 - Verify Username textbox is visible', async ({ loginPage }) => {
    //await expect(loginPage.usernameInput).toBeVisible();
    await loginPage.verifyUsernameVisible();
  });

  test('TC_010 - Verify Password text is visible', async ({ loginPage }) => {
    //await expect(loginPage.passwordInput).toBeVisible();
    await loginPage.verifyPasswordVisible();
  });

  test('TC_011 - Verify the Login Button is visible', async ({ loginPage }) => {
    // await expect(loginPage.loginButton).toBeVisible();
    await loginPage.verifyLoginButtonVisible();
    await expect(loginPage.loginButton).toBeEnabled();
  });

  test('TC_012 - Verify Forgot Password link is visible', async ({ loginPage }) => {
   await expect(loginPage.forgotPasswordLink).toBeVisible();
    //await loginPage.verifyForgotPasswordVisible();
  });

  test('TC_013 - Verify the Username Field Placeholder', async ({ loginPage }) => {
    await expect(loginPage.usernameInput).toHaveAttribute('Placeholder', 'Username');
  });

  test('TC_014 - Verify the Password Field Placeholder', async ({ loginPage }) => {
    await expect(loginPage.passwordInput).toHaveAttribute('Placeholder', 'Password');
  });





});