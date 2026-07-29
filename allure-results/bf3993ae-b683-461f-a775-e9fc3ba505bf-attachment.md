# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional\login.functional.spec.ts >> Login - Functional TEST >> TC_007 - Verify Login page URL
- Location: tests\functional\login.functional.spec.ts:14:7

# Error details

```
TypeError: received is not iterable
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.9
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | import { expect, test } from '@fixtures/testFixtures';
  2  | 
  3  | test.describe('Login - Functional TEST', () => {
  4  | 
  5  |   test.beforeEach(async ({ loginPage }) => {
  6  |     await loginPage.goto();
  7  |   })
  8  | 
  9  | 
  10 |   test('TC_006 - Verify Login page title', async ({ loginPage }) =>{
  11 |     expect(await loginPage.getPageTitle()).toContain("OrangeHRM");
  12 |   });
  13 | 
  14 |   test('TC_007 - Verify Login page URL', async ({ loginPage }) =>{
> 15 |     await expect(loginPage.getCurrentUrl()).toContain(/auth\/login/);
     |                                             ^ TypeError: received is not iterable
  16 |   })
  17 | 
  18 | 
  19 | });
```