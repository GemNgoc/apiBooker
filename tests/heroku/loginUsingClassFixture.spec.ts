import { test, expect } from "./fixtures/heroku.fixture";

const dataSet = [
  {
    username: "tomsmith",
    password: "SuperSecretPassword!",
    expectedURL: "https://the-internet.herokuapp.com/secure",
    flashMessage: "You logged into a secure area!",
  },
];

dataSet.forEach((data) => {
  test(`Check login page using Class Fixture with username: ${data.username} and password: ${data.password}`, async ({
    page,
    loginPage,
  }) => {
    // const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.submitForm(data.username, data.password);
    //   await expect(page.getByText(data.flashMessage)).toBeVisible();
    await expect(loginPage.getFlashMessage(data.flashMessage)).toBeVisible();

    //Verify the landing page
    await test.step("Verify elements", async () => {
      //Verify the landing page
      await expect(page).toHaveURL(data.expectedURL);
      await expect(page.url()).toBe(data.expectedURL);
    });
  });
});
