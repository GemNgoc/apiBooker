import { test, expect } from "./fixtures/heroku.fixture";

test.describe("Dropdown using Class Fixture", () => {
  test.beforeEach(async ({ dropdownAreaPage }) => {
    await dropdownAreaPage.goto();
  });

  test("able to select dropdown by label", async ({ dropdownAreaPage }) => {
    await dropdownAreaPage.selectFruits(["apple", "orange", "grape"]);

    // Validate "option 1" is selected
    await expect(dropdownAreaPage.fruitsDropdown).toHaveValues([
      "apple",
      "orange",
      "grape",
    ]);
  });
});
