import { test, expect } from "@playwright/test";

test(`able to select multiple items in a dropdown by CSS`, async ({ page }) => {
  await page.goto("https://output.jsbin.com/osebed/2");

  await page.locator("#fruits").selectOption(["apple", "orange", "grape"]);

  await expect(page.locator("#fruits")).toHaveValues([
    "apple",
    "orange",
    "grape",
  ]);
});

test(`able to select multiple items in a dropdown by ARIA -- chua lam duoc`, async ({
  page,
}) => {});
