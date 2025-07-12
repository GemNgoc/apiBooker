import { test, expect } from "@playwright/test";

// ## TC04: Hyper link : Hyperlink - link text
// 1. Open browser
// 2. Navigate to https://the-internet.herokuapp.com/status_codes
// 3. Click on "200"
// 4. Then "200 status code" page appear
// 5. Click on "go here"
// 6. Click on "301"
// 7. Then "301 status code" page appear
// 8. Click on "go here"
// 9. Click on "404"
// 10. Then "404 status code" page appear
// 11. Click on "go here"
// 12. Click on "500"
// 13. Then "500 status code" page appear
// 14. Click on "go here"

test(`able to click on hyperlink by ARIA`, async ({ page }) => {
  await page.goto("/status_codes");

  // Code 200
  await page.getByRole("link", { name: "200" }).click();
  await expect(
    page.getByText("This page returned a 200 status code.")
  ).toBeVisible();
  await page.getByRole("link", { name: "here" }).click();

  // Code 301
  await page.getByRole("link", { name: "301" }).click();
  await expect(
    page.getByText("This page returned a 301 status code.")
  ).toBeVisible();
  // await page.getByRole('link', {name: 'here'}).click();
  await page.goBack();

  // Code 404
  await page.getByRole("link", { name: "404" }).click();
  await expect(
    page.getByText("This page returned a 404 status code.")
  ).toBeVisible();
  await page.getByRole("link", { name: "here" }).click();

  // Code 500
  await page.getByRole("link", { name: "500" }).click();
  await expect(
    page.getByText("This page returned a 500 status code.")
  ).toBeVisible();
  await page.getByRole("link", { name: "here" }).click();
});

test(`dung filter`, async ({ page }) => {
  await page.goto("/status_codes");

  await page
    .getByRole("listitem")
    .filter({ hasText: "200" })
    .getByRole("link")
    .click();

  await expect(
    page.getByText("This page returned a 200 status code.")
  ).toBeVisible();
});
