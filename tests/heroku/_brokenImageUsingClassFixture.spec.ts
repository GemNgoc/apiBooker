import { test, expect } from "./fixtures/heroku.fixture";

test.skip(`able to check if broken image using Class Fixture`, async ({
  brokenImagePage,
}) => {
  // Navigate to https://the-internet.herokuapp.com/broken_images
  await brokenImagePage.goto();

  //   Check for broken images
  await expect(brokenImagePage.checkBrokenImages()).toBe(200);
});
