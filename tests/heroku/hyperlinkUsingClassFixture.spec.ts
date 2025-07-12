import { test, expect } from "./fixtures/heroku.fixture";

test.describe("hyperlink using Class Fixture", () => {
  test.beforeEach(async ({ hyperlinkPage }) => {
    await hyperlinkPage.goto();
  });

  test("able to click on hyperlink", async ({ hyperlinkPage }) => {
    // Code 200
    await hyperlinkPage.clickStatusCode("200");
    await expect(hyperlinkPage.getStatusCodeMessage("200")).toBeVisible();
    await hyperlinkPage.clickGoHere();

    // Code 301
    await hyperlinkPage.clickStatusCode("301");
    await expect(hyperlinkPage.getStatusCodeMessage("301")).toBeVisible();
    await hyperlinkPage.clickGoHere();

    // Code 404
    await hyperlinkPage.clickStatusCode("404");
    await expect(hyperlinkPage.getStatusCodeMessage("404")).toBeVisible();
    await hyperlinkPage.clickGoHere();

    // Code 500
    await hyperlinkPage.clickStatusCode("500");
    await expect(hyperlinkPage.getStatusCodeMessage("500")).toBeVisible();
    await hyperlinkPage.clickGoHere();
  });
  test("`dung filter`", async ({ hyperlinkPage }) => {
    // Code 200
    await hyperlinkPage.filterStatusCode("200");
    await expect(hyperlinkPage.getStatusCodeMessage("200")).toBeVisible();
    await hyperlinkPage.clickGoHere();

    // Code 301
    await hyperlinkPage.filterStatusCode("301");
    await expect(hyperlinkPage.getStatusCodeMessage("301")).toBeVisible();
    await hyperlinkPage.clickGoHere();

    // Code 404
    await hyperlinkPage.filterStatusCode("404");
    await expect(hyperlinkPage.getStatusCodeMessage("404")).toBeVisible();
    await hyperlinkPage.clickGoHere();

    // Code 500
    await hyperlinkPage.filterStatusCode("500");
    await expect(hyperlinkPage.getStatusCodeMessage("500")).toBeVisible();
    await hyperlinkPage.clickGoHere();
  });
});
