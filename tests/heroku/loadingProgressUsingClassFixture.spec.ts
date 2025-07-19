import { test, expect } from "./fixtures/heroku.fixture";

test.describe("Loading Progress Page Tests Using Class Fixture", () => {
  test.beforeEach(async ({ loadingProgressPage }) => {
    await loadingProgressPage.goto();
  });

  test("should start loading and display 'Hello World!' after loading", async ({
    loadingProgressPage,
  }) => {
    await loadingProgressPage.startLoading();
    // Wait for the loading image to be visible
    await expect(loadingProgressPage.loadingImage).toBeVisible();
    // Wait for the 'Hello World!' text to be visible
    await expect(loadingProgressPage.helloWorldText).toBeVisible();
  });
});
