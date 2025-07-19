import { test, expect } from "./fixtures/heroku.fixture";

test.describe("JS Alert Tests using Class Fixture", () => {
  test.beforeEach(async ({ jsAlertPage }) => {
    await jsAlertPage.goto();
  });

  test(`js alert => OK`, async ({ jsAlertPage }) => {
    await jsAlertPage.clickJsAlertButton();
    await expect(
      jsAlertPage.getMessageResult("You successfully clicked an alert")
    ).toBeVisible();
  });

  test(`js confirm ==> Cancel`, async ({ jsAlertPage }) => {
    await jsAlertPage.clickJsConfirmButton();
    await expect(
      jsAlertPage.getMessageResult("You clicked: Cancel")
    ).toBeVisible();
  });

  // Test Case này failed khi dialog có Ok và Cancel button.
  test.skip(`js confirm ==> OK`, async ({ jsAlertPage }) => {
    await jsAlertPage.clickJsConfirmButton();

    jsAlertPage.page.on("dialog", async (dialog) => {
      await expect(dialog.message()).toEqual("I am a JS Confirm");
      await dialog.accept();
    });
    await expect(jsAlertPage.getMessageResult("You clicked: Ok")).toBeVisible();
  });

  test(`js prompt => Cancel`, async ({ jsAlertPage }) => {
    await jsAlertPage.clickJsPromptButton();
    await expect(
      jsAlertPage.getMessageResult("You entered: null")
    ).toBeVisible();
  });
});
