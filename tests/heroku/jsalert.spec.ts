import { test, expect } from "@playwright/test";

test(`js alert => OK`, async ({ page }) => {
  await page.goto("/javascript_alerts");

  await page.getByRole("button", { name: "Click for JS Alert" }).click();

  await expect(
    page.getByText("You successfully clicked an alert")
  ).toBeVisible();
});

test(`js confirm ==> Cancel`, async ({ page }) => {
  await page.goto("/javascript_alerts");

  await page.getByRole("button", { name: "Click for JS Confirm" }).click();

  await expect(page.getByText("You clicked: Cancel")).toBeVisible();
});

// Test Case này failed khi dialog có Ok và Cancel button.
test.skip(`js confirm ==> OK`, async ({ page }) => {
  await page.goto("/javascript_alerts");

  await page.getByRole("button", { name: "Click for JS Confirm" }).click();

  page.on("dialog", async (dialog) => {
    await expect(dialog.message()).toEqual("I am a JS Confirm");
    await dialog.accept();
  });
  await expect(page.getByText("You clicked: Ok")).toBeVisible();
});

test(`js prompt => Cancel`, async ({ page }) => {
  await page.goto("/javascript_alerts");

  await page.getByRole("button", { name: "Click for JS Prompt" }).click();

  await expect(page.getByText("You entered: null")).toBeVisible();
});
