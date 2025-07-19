import { test, expect } from "./fixtures/heroku.fixture";

test.describe("Dropdown Area using Class Fixture", () => {
  test.beforeEach(async ({ dropdownAreaPage }) => {
    await dropdownAreaPage.goto();
  });

  test("able to select dropdown by label", async ({ dropdownAreaPage }) => {
    // await dropdownAreaPage.selectFruits(["banana", "orange", "grape"]);
    await dropdownAreaPage.selectFruits(["banana", "orange", "grape"]);

    // Validate "option 1" is selected
    await expect(dropdownAreaPage.fruitsDropdown).toHaveValues([
      "banana",
      "orange",
      "grape",
    ]);
  });
});
