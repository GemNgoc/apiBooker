import { test, expect } from "./fixtures/heroku.fixture";

test.describe("Dropdown using Class Fixture", () => {
  test.beforeEach(async ({ dropdownListPage }) => {
    await dropdownListPage.goto();
  });

  test("able to select dropdown by label", async ({ dropdownListPage }) => {
    // Select "Option 1"
    await dropdownListPage.selectOptionByLabel("Option 1");

    // Validate "option 1" is selected
    expect(dropdownListPage.dropdown).toHaveValue("1");

    // Tra ve option 0
    await dropdownListPage.selectOptionByValue("");
    expect(dropdownListPage.dropdown).toHaveValue("");
  });

  test("able to select dropdown by value", async ({ dropdownListPage }) => {
    // Select "Option 2"
    await dropdownListPage.selectOptionByValue("2");

    // Validate "option 2" is selected
    expect(dropdownListPage.dropdown).toHaveValue("2");

    // Tra ve option 0
    await dropdownListPage.selectOptionByValue("");
    expect(dropdownListPage.dropdown).toHaveValue("");
  });
});
