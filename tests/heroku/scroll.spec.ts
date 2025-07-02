import { test, expect } from "@playwright/test";

test(`able to scroll a page using scrollIntoViewIfNeeded`, async ({ page }) => {
  await page.goto("/infinite_scroll");

  await page
    .getByText("Powered by Elemental Selenium")
    .scrollIntoViewIfNeeded();

  await expect(page.getByText("Powered by Elemental Selenium")).toBeVisible();
});

test(`able to scroll a page using for`, async ({ page }) => {
  await page.goto("/infinite_scroll");

  for (let i = 0; i < 5; i++) {
    await page.mouse.wheel(0, 1000); // Scroll down to trigger loading of more items
    await page.waitForTimeout(1000); // Wait 1s for items to load
  }

  await expect(page.getByText("Powered by Elemental Selenium")).toBeVisible();
});

test(`able to scroll down and up a page using for`, async ({ page }) => {
  await page.goto("/infinite_scroll");

  for (let i = 0; i < 2; i++) {
    await page.mouse.wheel(0, 1000); // Scroll down to trigger loading of more items
    await page.waitForTimeout(1000); // Wait 1s for items to load
  }

  await expect(page.getByText("Powered by Elemental Selenium")).toBeVisible();

  for (let i = 0; i < 1; i++) {
    await page.mouse.wheel(0, -1000); // Scroll up to trigger loading of more items
    await page.waitForTimeout(1000); // Wait 1s for items to load
  }

  await expect(
    page.getByRole("heading", { name: "Infinite Scroll" })
  ).toBeVisible();
});
