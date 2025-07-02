import { test, expect } from "@playwright/test";

/*
## TC01: Form Authentication : Login successful with valid credentials
1. Open browser
2. Navigate to https://the-internet.herokuapp.com/login
3. Fill in username with tomsmith
4. Fill in the password with SuperSecretPassword!
5. Click on Login button
6. And the home page is appear
*/

test("Login page by ARIA", async ({ page }) => {
  // Navigate to https://the-internet.herokuapp.com/login
  await page.goto("/login");

  // Fill in username with tomsmith
  await page.getByRole("textbox", { name: "Username" }).fill("tomsmith");

  // Fill in the password with SuperSecretPassword!
  await page
    .getByRole("textbox", { name: "Password" })
    .fill("SuperSecretPassword!");

  //Click on Login button
  // await page.getByRole('button',{name: ' Login'}).click();
  await page.getByRole("button", { name: " Login" }).click();

  //Verify the landing page
  await expect(page).toHaveURL("/secure");
  await expect(page.url()).toBe("https://the-internet.herokuapp.com/secure");
  await expect
    .soft(page.getByText("You logged into a secure area!"))
    .toBeVisible();

  //Click Logout button
  await page.getByRole("link", { name: "logout" }).click();

  //Verify the landing page got back
  await expect(page).toHaveURL("/login");
  await expect(page.getByText("You logged out of the secure")).toBeVisible();
});

test("Login page by CSS by name & by ID (Copy selector)", async ({ page }) => {
  //Navigate to https://the-internet.herokuapp.com/login
  await page.goto("/login");

  // Fill in username with tomsmith
  await page.locator('input[name = "username"]').fill("tomsmith");
  //   await page.locator("#username").fill("tomsmith");

  // Fill in the password with SuperSecretPassword!
  await page.locator('input[name="password"]').fill("SuperSecretPassword!");

  //Click on Login button by Copy selector
  await page.locator("#login > button").click();

  //Verify the landing page
  await expect(page).toHaveURL("/secure");
  //  by Copy selector
  await expect(
    page.locator("#flash").getByText("You logged into a secure area!")
  ).toBeVisible();
  await expect(page.locator('a[href="/logout"]')).toBeVisible();

  //Back to login page
  await page.locator('a[href="/logout"]').click();

  // Verify the Login page got back
  await expect(page).toHaveURL("/login");
  await expect(
    page.locator("#flash").getByText("You logged out of the secure area!")
  ).toBeVisible();
});
