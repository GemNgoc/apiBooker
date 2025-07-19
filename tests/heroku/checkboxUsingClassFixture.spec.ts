import { test, expect } from "./fixtures/heroku.fixture";

test(`able checkbox by CSS using Class Fixture`, async ({ checkboxPage }) => {
  //Navigate to https://the-internet.herokuapp.com/checkboxes
  await checkboxPage.goto();

  //Check on checkbox1
  await checkboxPage.checkCheckbox1();

  //UnCheck on checkbox2
  await checkboxPage.uncheckCheckbox2();

  //Verify checkbox1 is checked and checkbox2 is unchecked
  await expect(checkboxPage.checkbox1).toBeChecked();
  await expect(checkboxPage.checkbox2).not.toBeChecked();
});
