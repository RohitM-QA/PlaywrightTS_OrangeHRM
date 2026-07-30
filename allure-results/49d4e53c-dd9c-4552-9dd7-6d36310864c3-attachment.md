# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional\login.functional.spec.ts >> Login - Functional TEST >> TC_012 - Verify Forgot Password link is visible
- Location: tests\functional\login.functional.spec.ts:41:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Forgot your password?' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('link', { name: 'Forgot your password?' })

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1  | import { expect, test } from '@fixtures/testFixtures';
  2  | //import { LoginPage } from '@pages/LoginPage';
  3  | 
  4  | test.describe('Login - Functional TEST', () => {
  5  | 
  6  |   test.beforeEach(async ({ loginPage }) => {
  7  |     await loginPage.goto();
  8  |   })
  9  | 
  10 | 
  11 |   test('TC_006 - Verify Login page title', async ({ loginPage }) => {
  12 |     expect(await loginPage.getPageTitle()).toContain("OrangeHRM");
  13 |   });
  14 | 
  15 |   test('TC_007 - Verify Login page URL', async ({ loginPage }) => {
  16 |     await loginPage.goto();
  17 |     expect(await loginPage.getCurrentUrl()).toContain('/auth/login');
  18 |   });
  19 | 
  20 |   test('TC_008 - Verify OrangeHRM logo is visible', async ({ loginPage }) => {
  21 |     //await expect(loginPage.orangeHRMLogo).toBeVisible();
  22 |     await loginPage.verifyLogoVisible();
  23 |   });
  24 | 
  25 |   test('TC_009 - Verify Username textbox is visible', async ({ loginPage }) => {
  26 |     //await expect(loginPage.usernameInput).toBeVisible();
  27 |     await loginPage.verifyUsernameVisible();
  28 |   });
  29 | 
  30 |   test('TC_010 - Verify Password text is visible', async ({ loginPage }) => {
  31 |     //await expect(loginPage.passwordInput).toBeVisible();
  32 |     await loginPage.verifyPasswordVisible();
  33 |   });
  34 | 
  35 |   test('TC_011 - Verify the Login Button is visible', async ({ loginPage }) => {
  36 |     // await expect(loginPage.loginButton).toBeVisible();
  37 |     await loginPage.verifyLoginButtonVisible();
  38 |     await expect(loginPage.loginButton).toBeEnabled();
  39 |   });
  40 | 
  41 |   test('TC_012 - Verify Forgot Password link is visible', async ({ loginPage }) => {
> 42 |    await expect(loginPage.forgotPasswordLink).toBeVisible();
     |                                               ^ Error: expect(locator).toBeVisible() failed
  43 |     //await loginPage.verifyForgotPasswordVisible();
  44 |   });
  45 | 
  46 |   test('TC_013 - Verify the Username Field Placeholder', async ({ loginPage }) => {
  47 |     await expect(loginPage.usernameInput).toHaveAttribute('Placeholder', 'Username');
  48 |   });
  49 | 
  50 |   test('TC_014 - Verify the Password Field Placeholder', async ({ loginPage }) => {
  51 |     await expect(loginPage.passwordInput).toHaveAttribute('Placeholder', 'Password');
  52 |   });
  53 | 
  54 | 
  55 | 
  56 | 
  57 | 
  58 | });
```