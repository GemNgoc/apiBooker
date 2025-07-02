import { test, expect } from "@playwright/test";

test(`able to press key from the keyboard`, async ({ page }) => {
  await page.goto("/key_presses");

  await page.keyboard.press("Tab");
  await expect(page.locator("#result")).toHaveText("You entered: TAB");

  await page.keyboard.press("B");
  await expect(page.locator("#result")).toHaveText("You entered: B");
});
