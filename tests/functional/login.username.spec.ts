import { expect, test } from '@fixtures/testFixtures';

test.describe('Login - Username Functional TEST', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
    })

    test('TC_015 - Verify user can enter a valid username', async ({ loginPage }) => {
        let username = 'Admin'
        await loginPage.enterUsername(username);
        await expect(loginPage.usernameInput).toHaveValue(username);
    });

    test('TC_016 - Verify username with leading spaces', async ({ loginPage }) => {
        let username = '       Admin'
        await loginPage.enterUsername(username);
        await expect(loginPage.usernameInput).toHaveValue(username);
    })

    test('TC_017 - Verify username with trailing spaces', async ({ loginPage }) => {
    const username = 'Admin   ';
    await loginPage.enterUsername(username);
    await expect(loginPage.usernameInput).toHaveValue(username);
  });

  test('TC_018 - Verify username field can be cleared', async ({ loginPage }) => {
    await loginPage.enterUsername('Admin');
    await loginPage.clearUsername();
    await expect(loginPage.usernameInput).toHaveValue('');
  })

  test('TC_019 - Verify username supports copy and paste', async ({ loginPage }) => {
    const username = 'Admin';
    await loginPage.pasteUsername(username);
    await expect(loginPage.usernameInput).toHaveValue(username);
  });




});