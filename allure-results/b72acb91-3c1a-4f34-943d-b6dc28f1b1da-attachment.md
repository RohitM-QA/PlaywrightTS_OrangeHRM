# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.ts >> Login - Smoke TEST >> TC_003 - Verify Dashboard after login
- Location: tests\smoke\login.spec.ts:27:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e6]:
  - heading "This page isn’t working" [level=1] [ref=e7]
  - paragraph [ref=e8]:
    - strong [ref=e9]: opensource-demo.orangehrmlive.com
    - text: is currently unable to handle this request.
  - generic [ref=e10]: HTTP ERROR 500
```

# Test source

```ts
  1  | import { expect, test } from '@fixtures/testFixtures';
  2  | import { LoginPage } from '@pages/LoginPage';
  3  | //import loginData from '@data/loginData.json';
  4  | 
  5  | test.describe('Login - Smoke TEST', () => {
  6  | 
  7  |   test.beforeEach(async ({ loginPage }) => {
  8  |     await loginPage.goto();
  9  | 
  10 |   });
  11 | 
  12 |   test('TC_001 - Verify Login page loads successfully', async ({ loginPage }) => {
  13 |     await loginPage.verifyLoginPageLoaded();
  14 | 
  15 |     await expect(loginPage.usernameInput).toBeVisible();
  16 |     await expect(loginPage.passwordInput).toBeVisible();
  17 |     await expect(loginPage.loginButton).toBeVisible();
  18 |     await expect(loginPage.orangeHRMLogo).toBeVisible();
  19 |     //await expect(loginPage.forgotPasswordLink).toBeVisible();
  20 |   });
  21 | 
  22 |   test('TC_002 - Login with valid Admin credentials', async ({ loginPage }) => {
  23 |     const dashboard = await loginPage.loginAsAdmin();
  24 |     await dashboard.verifyDashboardLoaded();
  25 |   });
  26 | 
  27 |   test('TC_003 - Verify Dashboard after login', async ({ loginPage }) => {
  28 |     const dashboard = await loginPage.loginAsAdmin();
> 29 |     expect(await dashboard.isDashboardDisplayed()).toBeTruthy();
     |                                                    ^ Error: expect(received).toBeTruthy()
  30 |     await expect(dashboard.dashboardTitle).toBeVisible();
  31 |   });
  32 | 
  33 |   test('TC_004 - Verify Logout', async ({ loginPage }) => {
  34 |     const dashboard = await loginPage.loginAsAdmin();
  35 |     await dashboard.topBar.logout();
  36 |     expect(await dashboard.verifyDashboardLoaded());
  37 | 
  38 | 
  39 |   })
  40 | 
  41 | 
  42 | 
  43 | 
  44 | });
```