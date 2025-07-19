import { test, expect } from "./fixtures/heroku.fixture";

test.describe("Scroll using Class Fixture", () => {
  test.beforeEach(async ({ scrollPage }) => {
    await scrollPage.goto();
  });
  test(`able to scroll a page using scrollIntoViewIfNeeded`, async ({
    scrollPage,
  }) => {
    await scrollPage
      .scrollTo("Powered by Elemental Selenium")
      .scrollIntoViewIfNeeded();

    await expect(
      scrollPage.scrollTo("Powered by Elemental Selenium")
    ).toBeVisible();
  });

  test(`able to scroll a page using for`, async ({ scrollPage }) => {
    await scrollPage.scrollDown(5);

    await expect(
      scrollPage.scrollTo("Powered by Elemental Selenium")
    ).toBeVisible();
  });

  test(`able to scroll down and up a page using for`, async ({
    scrollPage,
  }) => {
    await scrollPage.scrollDown(2);

    await expect(
      scrollPage.scrollTo("Powered by Elemental Selenium")
    ).toBeVisible();

    await scrollPage.scrollUp(1);

    await expect(scrollPage.scrollTo("Infinite Scroll")).toBeVisible();
  });
});
