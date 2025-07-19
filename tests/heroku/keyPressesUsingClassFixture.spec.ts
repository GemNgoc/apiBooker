import { test, expect } from "./fixtures/heroku.fixture";

test.describe("Key Presses Tests using Class Fixture", () => {
  test.beforeEach(async ({ keyPressesPage }) => {
    await keyPressesPage.goto();
  });

  test(`able to press key from the keyboard`, async ({ keyPressesPage }) => {
    await keyPressesPage.pressKey("Tab");
    await expect(keyPressesPage.result).toHaveText("You entered: TAB");

    await keyPressesPage.pressKey("B");
    await expect(keyPressesPage.result).toHaveText("You entered: B");
  });
});
