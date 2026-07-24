import { test } from '@fixtures/testFixtures';

test.describe('Login - Smoke TEST', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.verifyLoginPageLoaded();
  });

  test('Click Login button', async ({ loginPage }) => {
    await loginPage.clickLogin();
  });


  

});