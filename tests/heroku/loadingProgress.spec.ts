import { test, expect } from "@playwright/test";

test(`check loading progress done`, async ({ page }) => {
  await page.goto("/dynamic_loading/1");

  await page.getByRole("button", { name: "Start" }).click();

  await expect(page.locator("#loading").getByRole("img")).toBeVisible();

  await expect(page.getByRole("heading", { name: "Hello World!" })).toBeVisible(
    { timeout: 50000 } //50s
  );
});
