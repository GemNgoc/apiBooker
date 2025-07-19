import { test, expect } from "./fixtures/heroku.fixture";

test(`able to close a popup using Class Fixture`, async ({ popupPage }) => {
  await popupPage.goto();

  //Verify Click Here link is visible after the popup is closed automatically
  await expect(popupPage.getClickHereLink()).toBeVisible();

  //Click on Click Here link to show the popup
  await popupPage.getClickHereLink().click();

  //Verify Click Here link is visible after the popup is closed automatically
  await expect(popupPage.getClickHereLink()).toBeVisible();
});
