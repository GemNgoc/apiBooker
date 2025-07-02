import { test, expect } from "@playwright/test";

test(`able to drag and drop`, async ({ page }) => {
  await page.goto("/drag_and_drop");

  const source = await page.locator("#column-a");
  const target = await page.locator("#column-b");

  await expect(source).toHaveText("A");
  await expect(target).toHaveText("B");

  await source.dragTo(target);

  await expect(source).toHaveText("B");
  await expect(target).toHaveText("A");
});
