import { test, expect } from "./fixtures/heroku.fixture";

test.describe("Hover using Class Fixture", () => {
  test.beforeEach(async ({ hoverPage }) => {
    await hoverPage.goto();
  });

  test("able to hover over user avatars and see names", async ({
    hoverPage,
  }) => {
    await hoverPage.hoverOverAvatar(0);
    await expect(hoverPage.getUserName("name: user1")).toBeVisible();

    await hoverPage.hoverOverAvatar(1);
    await expect(hoverPage.getUserName("name: user2")).toBeVisible();

    await hoverPage.hoverOverAvatar(2);
    await expect(hoverPage.getUserName("name: user3")).toBeVisible();
  });
});
