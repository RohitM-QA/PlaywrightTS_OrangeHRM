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
  94  |   }
  95  | 
  96  |   async type(locator: Locator, value: string): Promise<void> {
  97  |     await locator.pressSequentially(value);
  98  |   }
  99  | 
  100 |   async press(locator: Locator, key: string): Promise<void> {
  101 |     await locator.press(key);
  102 |   }
  103 | 
  104 |   // Checkbox
  105 |   async check(locator: Locator): Promise<void> {
  106 |     await locator.check();
  107 |   }
  108 | 
  109 |   async uncheck(locator: Locator): Promise<void> {
  110 |     await locator.uncheck();
  111 |   }
  112 | 
  113 |   // Dropdown
  114 |   async selectByText(locator: Locator, text: string): Promise<void> {
  115 |     await locator.selectOption({
  116 |       label: text,
  117 |     });
  118 |   }
  119 | 
  120 |   async selectByValue(locator: Locator, value: string): Promise<void> {
  121 |     await locator.selectOption(value);
  122 |   }
  123 | 
  124 |   async selectByIndex(locator: Locator, index: number): Promise<void> {
  125 |     await locator.selectOption({
  126 |       index,
  127 |     });
  128 |   }
  129 | 
  130 |   // Waits
  131 |   async waitForVisible(locator: Locator): Promise<void> {
  132 |     await locator.waitFor({
  133 |       state: 'visible',
  134 |     });
  135 |   }
  136 | 
  137 |   async waitForHidden(locator: Locator): Promise<void> {
  138 |     await locator.waitFor({
  139 |       state: 'hidden',
  140 |     });
  141 |   }
  142 | 
  143 |   async waitForLoad(): Promise<void> {
  144 |     await this.page.waitForLoadState('networkidle');
  145 |   }
  146 | 
  147 |   async waitForUrl(url: string | RegExp): Promise<void> {
  148 |     await this.page.waitForURL(url);
  149 |   }
  150 | 
  151 |   // Read Values
  152 |   async getText(locator: Locator): Promise<string> {
  153 |     return (await locator.textContent())?.trim() ?? '';
  154 |   }
  155 | 
  156 |   async getValue(locator: Locator): Promise<string> {
  157 |     return locator.inputValue();
  158 |   }
  159 | 
  160 |   async getAttribute(
  161 |     locator: Locator,
  162 |     attribute: string,
  163 |   ): Promise<string | null> {
  164 |     return locator.getAttribute(attribute);
  165 |   }
  166 | 
  167 |   async getCount(locator: Locator): Promise<number> {
  168 |     return locator.count();
  169 |   }
  170 | 
  171 |   // State Checks
  172 |   async isVisible(locator: Locator): Promise<boolean> {
  173 |     return locator.isVisible();
  174 |   }
  175 | 
  176 |   async isHidden(locator: Locator): Promise<boolean> {
  177 |     return locator.isHidden();
  178 |   }
  179 | 
  180 |   async isEnabled(locator: Locator): Promise<boolean> {
  181 |     return locator.isEnabled();
  182 |   }
  183 | 
  184 |   async isDisabled(locator: Locator): Promise<boolean> {
  185 |     return locator.isDisabled();
  186 |   }
  187 | 
  188 |   async isChecked(locator: Locator): Promise<boolean> {
  189 |     return locator.isChecked();
  190 |   }
  191 | 
  192 |   // Assertions
  193 |   async expectVisible(locator: Locator): Promise<void> {
> 194 |     await expect(locator).toBeVisible();
      |                           ^ Error: expect(locator).toBeVisible() failed
  195 |   }
  196 | 
  197 |   async expectHidden(locator: Locator): Promise<void> {
  198 |     await expect(locator).toBeHidden();
  199 |   }
  200 | 
  201 |   async expectText(locator: Locator, text: string): Promise<void> {
  202 |     await expect(locator).toHaveText(text);
  203 |   }
  204 | 
  205 |   async expectValue(locator: Locator, value: string): Promise<void> {
  206 |     await expect(locator).toHaveValue(value);
  207 |   }
  208 | 
  209 |   async expectUrl(url: string | RegExp): Promise<void> {
  210 |     await expect(this.page).toHaveURL(url);
  211 |   }
  212 | 
  213 |   async expectTitle(title: string | RegExp): Promise<void> {
  214 |     await expect(this.page).toHaveTitle(title);
  215 |   }
  216 | 
  217 |   // Mouse Actions
  218 | 
  219 |   async dragAndDrop(source: Locator, target: Locator): Promise<void> {
  220 |     await source.dragTo(target);
  221 |   }
  222 | 
  223 |   async scrollIntoView(locator: Locator): Promise<void> {
  224 |     await locator.scrollIntoViewIfNeeded();
  225 |   }
  226 | 
  227 | 
  228 |   // Keyboard
  229 |   async keyboardPress(key: string): Promise<void> {
  230 |     await this.page.keyboard.press(key);
  231 |   }
  232 | 
  233 | 
  234 |   // Screenshot
  235 |   async takeScreenshot(path: string): Promise<void> {
  236 |     await this.page.screenshot({
  237 |       path,
  238 |       fullPage: true,
  239 |     });
  240 |   }
  241 | 
  242 | 
  243 |   // Browser
  244 |   async close(): Promise<void> {
  245 |     await this.page.close();
  246 |   }
  247 | 
  248 |   async bringToFront(): Promise<void> {
  249 |     await this.page.bringToFront();
  250 |   }
  251 | }
```