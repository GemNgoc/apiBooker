import { test, expect } from "@playwright/test";

test("able to hover", async ({ page }) => {
  await page.goto("/hovers");

  await page.getByRole("img", { name: "User Avatar" }).first().hover();
  await expect(page.getByText("name: user1")).toBeVisible();
  //Or
  await expect(page.locator(".figcaption").first()).toBeVisible();

  await page.getByRole("img", { name: "User Avatar" }).nth(1).hover();
  await expect(page.getByText("name: user2")).toBeVisible();

  await page.getByRole("img", { name: "User Avatar" }).nth(2).hover();
  await expect(page.getByText("name: user3")).toBeVisible();
});
