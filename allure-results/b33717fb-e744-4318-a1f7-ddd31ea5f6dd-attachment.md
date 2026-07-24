# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login.spec.ts >> Login - Smoke TEST >> Click Login button
- Location: tests\smoke\login.spec.ts:10:7

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Username') to be visible

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Connexion" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Nom d'utilisateur
            - textbox "Nom d'utilisateur" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Mot de passe
            - textbox "Mot de passe" [ref=e30]
          - button "Connexion" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Vous avez oublié votre mot de passe?
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
  44  |   locator(selector: string): Locator {
  45  |     return this.page.locator(selector);
  46  |   }
  47  | 
  48  |   getByRole(...args: Parameters<Page['getByRole']>): Locator {
  49  |     return this.page.getByRole(...args);
  50  |   }
  51  | 
  52  |   getByText(text: string): Locator {
  53  |     return this.page.getByText(text);
  54  |   }
  55  | 
  56  |   getByLabel(text: string): Locator {
  57  |     return this.page.getByLabel(text);
  58  |   }
  59  | 
  60  |   getByPlaceholder(text: string): Locator {
  61  |     return this.page.getByPlaceholder(text);
  62  |   }
  63  | 
  64  |   // ==========================================================
  65  |   // Click Actions
  66  |   // ==========================================================
  67  | 
  68  |   async click(locator: Locator): Promise<void> {
  69  |     await locator.click();
  70  |   }
  71  | 
  72  |   async doubleClick(locator: Locator): Promise<void> {
  73  |     await locator.dblclick();
  74  |   }
  75  | 
  76  |   async rightClick(locator: Locator): Promise<void> {
  77  |     await locator.click({
  78  |       button: 'right',
  79  |     });
  80  |   }
  81  | 
  82  |   async hover(locator: Locator): Promise<void> {
  83  |     await locator.hover();
  84  |   }
  85  | 
  86  |   // ==========================================================
  87  |   // Input Actions
  88  |   // ==========================================================
  89  | 
  90  |   async fill(locator: Locator, value: string): Promise<void> {
  91  |     await locator.fill(value);
  92  |   }
  93  | 
  94  |   async clearAndFill(locator: Locator, value: string): Promise<void> {
  95  |     await locator.clear();
  96  |     await locator.fill(value);
  97  |   }
  98  | 
  99  |   async type(locator: Locator, value: string): Promise<void> {
  100 |     await locator.pressSequentially(value);
  101 |   }
  102 | 
  103 |   async press(locator: Locator, key: string): Promise<void> {
  104 |     await locator.press(key);
  105 |   }
  106 | 
  107 |   // ==========================================================
  108 |   // Checkbox
  109 |   // ==========================================================
  110 | 
  111 |   async check(locator: Locator): Promise<void> {
  112 |     await locator.check();
  113 |   }
  114 | 
  115 |   async uncheck(locator: Locator): Promise<void> {
  116 |     await locator.uncheck();
  117 |   }
  118 | 
  119 |   // ==========================================================
  120 |   // Dropdown
  121 |   // ==========================================================
  122 | 
  123 |   async selectByText(locator: Locator, text: string): Promise<void> {
  124 |     await locator.selectOption({
  125 |       label: text,
  126 |     });
  127 |   }
  128 | 
  129 |   async selectByValue(locator: Locator, value: string): Promise<void> {
  130 |     await locator.selectOption(value);
  131 |   }
  132 | 
  133 |   async selectByIndex(locator: Locator, index: number): Promise<void> {
  134 |     await locator.selectOption({
  135 |       index,
  136 |     });
  137 |   }
  138 | 
  139 |   // ==========================================================
  140 |   // Waits
  141 |   // ==========================================================
  142 | 
  143 |   async waitForVisible(locator: Locator): Promise<void> {
> 144 |     await locator.waitFor({
      |                   ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  145 |       state: 'visible',
  146 |     });
  147 |   }
  148 | 
  149 |   async waitForHidden(locator: Locator): Promise<void> {
  150 |     await locator.waitFor({
  151 |       state: 'hidden',
  152 |     });
  153 |   }
  154 | 
  155 |   async waitForLoad(): Promise<void> {
  156 |     await this.page.waitForLoadState('networkidle');
  157 |   }
  158 | 
  159 |   async waitForUrl(url: string | RegExp): Promise<void> {
  160 |     await this.page.waitForURL(url);
  161 |   }
  162 | 
  163 |   // ==========================================================
  164 |   // Read Values
  165 |   // ==========================================================
  166 | 
  167 |   async getText(locator: Locator): Promise<string> {
  168 |     return (await locator.textContent())?.trim() ?? '';
  169 |   }
  170 | 
  171 |   async getValue(locator: Locator): Promise<string> {
  172 |     return locator.inputValue();
  173 |   }
  174 | 
  175 |   async getAttribute(
  176 |     locator: Locator,
  177 |     attribute: string,
  178 |   ): Promise<string | null> {
  179 |     return locator.getAttribute(attribute);
  180 |   }
  181 | 
  182 |   async getCount(locator: Locator): Promise<number> {
  183 |     return locator.count();
  184 |   }
  185 | 
  186 |   // ==========================================================
  187 |   // State Checks
  188 |   // ==========================================================
  189 | 
  190 |   async isVisible(locator: Locator): Promise<boolean> {
  191 |     return locator.isVisible();
  192 |   }
  193 | 
  194 |   async isHidden(locator: Locator): Promise<boolean> {
  195 |     return locator.isHidden();
  196 |   }
  197 | 
  198 |   async isEnabled(locator: Locator): Promise<boolean> {
  199 |     return locator.isEnabled();
  200 |   }
  201 | 
  202 |   async isDisabled(locator: Locator): Promise<boolean> {
  203 |     return locator.isDisabled();
  204 |   }
  205 | 
  206 |   async isChecked(locator: Locator): Promise<boolean> {
  207 |     return locator.isChecked();
  208 |   }
  209 | 
  210 |   // ==========================================================
  211 |   // Assertions
  212 |   // ==========================================================
  213 | 
  214 |   async expectVisible(locator: Locator): Promise<void> {
  215 |     await expect(locator).toBeVisible();
  216 |   }
  217 | 
  218 |   async expectHidden(locator: Locator): Promise<void> {
  219 |     await expect(locator).toBeHidden();
  220 |   }
  221 | 
  222 |   async expectText(locator: Locator, text: string): Promise<void> {
  223 |     await expect(locator).toHaveText(text);
  224 |   }
  225 | 
  226 |   async expectValue(locator: Locator, value: string): Promise<void> {
  227 |     await expect(locator).toHaveValue(value);
  228 |   }
  229 | 
  230 |   async expectUrl(url: string | RegExp): Promise<void> {
  231 |     await expect(this.page).toHaveURL(url);
  232 |   }
  233 | 
  234 |   async expectTitle(title: string | RegExp): Promise<void> {
  235 |     await expect(this.page).toHaveTitle(title);
  236 |   }
  237 | 
  238 |   // ==========================================================
  239 |   // Mouse Actions
  240 |   // ==========================================================
  241 | 
  242 |   async dragAndDrop(source: Locator, target: Locator): Promise<void> {
  243 |     await source.dragTo(target);
  244 |   }
```