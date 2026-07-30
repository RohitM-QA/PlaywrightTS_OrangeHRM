import { expect, test } from '@fixtures/testFixtures';

test.describe('Login Password Field - Functional Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
    });

    test('TC_030 - Verify user can enter a valid password', async ({ loginPage }) => {
        const password = 'admin123';
        await loginPage.enterPassword(password);
        await loginPage.verifyPasswordValue(password);
    });

    test('TC_031 - Verify password field is masked', async ({ loginPage }) => {
        expect(await loginPage.isPasswordMasked()).toBeTruthy();
    });

    test('TC_032 - Verify password field can be cleared', async ({ loginPage }) => {
        await loginPage.enterPassword('admin123');
        await loginPage.clearPassword();
        await loginPage.verifyPasswordValue('');
    });

    test('TC_033 - Verify password supports copy and paste', async ({ loginPage }) => {
        const password = 'admin123';
        await loginPage.pastePassword(password);
        await loginPage.verifyPasswordValue(password);
    });

    test('TC_034 - Verify password retains value after losing focus', async ({ loginPage }) => {
        const password = 'admin123';
        await loginPage.enterPassword(password);
        await loginPage.focusUsername();
        await loginPage.verifyPasswordValue(password);
    });

    test('TC_035 - Verify password field gains focus when clicked', async ({ loginPage }) => {
        await loginPage.focusPassword();
        await expect(loginPage.passwordInput).toBeFocused();
    });

});