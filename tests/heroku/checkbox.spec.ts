import { test, expect } from "@playwright/test";
/*
## TC02: Checkboxes : Check to a box
1. Open browser
2. Navigate to https://the-internet.herokuapp.com/checkboxes
3. Check on checkbox1
4. Verify checkbox1 is checked
5. Check on checkbox2
6. Verify checkbox2 is checked
*/

test(`able checkbox by CSS`, async ({ page }) => {
  //Navigate to https://the-internet.herokuapp.com/checkboxes
  await page.goto("/checkboxes");

  //Check on checkbox1
  await page.locator("#checkboxes > input[type=checkbox]:nth-child(1)").check();

  //UnCheck on checkbox2
  await page
    .locator("#checkboxes > input[type=checkbox]:nth-child(3)")
    .uncheck();

  //Verify checkbox 1 checked, checkbox 2 unchecked
  await expect(
    page.locator("#checkboxes > input[type=checkbox]:nth-child(1)")
  ).toBeChecked();

  await expect(
    page.locator("#checkboxes > input[type=checkbox]:nth-child(3)")
  ).not.toBeChecked();
});

test("able to checkbox by ARIA", async ({ page }) => {
  //Navigate to https://the-internet.herokuapp.com/checkboxes
  await page.goto("/checkboxes");

  //Check checkbox 1 & uncheck checbox 2
  await page.getByRole("checkbox").first().check();
  await page.getByRole("checkbox").nth(1).uncheck();

  //Verify checbox1 checked and checkbox2 unchecked

  await expect(page.getByRole("checkbox").first()).toBeChecked();
  await expect(page.getByRole("checkbox").nth(1)).not.toBeChecked();
});
