import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/login.page";

const dataSet = [
  {
    username: "tomsmith",
    password: "SuperSecretPassword!",
    expectedURL: "https://the-internet.herokuapp.com/secure",
    flashMessage: "You logged into a secure area!",
  },
];

dataSet.forEach((data) => {
  test(`Check login page with username: ${data.username} and password: ${data.password}`, async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.submitForm(data.username, data.password);
    //   await expect(page.getByText(data.flashMessage)).toBeVisible();
    await expect(loginPage.getFlashMessage(data.flashMessage)).toBeVisible();

    /*
    // Navigate to https://the-internet.herokuapp.com/login
    await page.goto("/login");

    // Gom 3 steps
    await test.step("Login steps", async () => {
      // Fill in username with tomsmith
      await page.getByRole("textbox", { name: "Username" }).fill(data.username);

      // Fill in the password with SuperSecretPassword!
      await page.getByRole("textbox", { name: "Password" }).fill(data.password);

      //Click on Login button
      // await page.getByRole('button',{name: ' Login'}).click();
      await page.getByRole("button", { name: " Login" }).click();
    });*/

    //Verify the landing page
    await test.step("Verify elements", async () => {
      //Verify the landing page
      await expect(page).toHaveURL(data.expectedURL);
      await expect(page.url()).toBe(data.expectedURL);
    });
  });
});
