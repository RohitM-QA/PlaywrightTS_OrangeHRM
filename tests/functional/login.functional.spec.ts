import { expect, test } from '@fixtures/testFixtures';

test.describe('Login - Functional TEST', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  })


  test('TC_006 - Verify Login page title', async ({ loginPage }) =>{
    expect(await loginPage.getPageTitle()).toContain("OrangeHRM");
  });

//   test('TC_007 - Verify Login page URL', async ({ loginPage }) =>{
//     await expect(loginPage.getCurrentUrl()).toContain(/auth\/login/);
//   })


});