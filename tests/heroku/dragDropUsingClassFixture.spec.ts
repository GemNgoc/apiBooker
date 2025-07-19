import { test, expect } from "./fixtures/heroku.fixture";

test.describe("Drag and Drop Using Class Fixture", () => {
  test.beforeEach(async ({ dragDropPage }) => {
    await dragDropPage.goto();
  });

  test("able to drag and drop", async ({ dragDropPage }) => {
    await expect(dragDropPage.source).toHaveText("A");
    await expect(dragDropPage.target).toHaveText("B");

    await dragDropPage.dragSourceToTarget();

    await expect(dragDropPage.source).toHaveText("B");
    await expect(dragDropPage.target).toHaveText("A");
  });
});
