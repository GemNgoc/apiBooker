import { test, expect } from "./fixtures/heroku.fixture";

test(`able checkbox by CSS`, async ({ checkboxPage }) => {
  //Navigate to https://the-internet.herokuapp.com/checkboxes
  await checkboxPage.goto();

  //Check on checkbox1
  await checkboxPage.checkCheckbox1();

  //UnCheck on checkbox2
  await checkboxPage.uncheckCheckbox2();

  //Verify checkbox 1 checked, checkbox 2 unchecked
  //   await expect(checkboxPage.isCheckbox1Checked()).toBeTruthy();
  //   await expect(checkboxPage.isCheckbox2Checked()).toBeFalsy();//-->hàm này chạy get failed with tobeFalsy
  await expect(checkboxPage.checkbox1).toBeChecked();
  await expect(checkboxPage.checkbox2).not.toBeChecked();
});
