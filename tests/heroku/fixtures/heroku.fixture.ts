import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { CheckboxPage } from "../pages/checkbox.page";
import { DropdownListPage } from "../pages/dropdownlist.page";
import { DropdownAreaPage } from "../pages/dropdownArea.page";
import { HyperlinkPage } from "../pages/hyperlink.page";

type HerokuFixtures = {
  loginPage: LoginPage;
  checkboxPage: CheckboxPage;
  dropdownListPage: DropdownListPage;
  dropdownAreaPage: DropdownAreaPage;
  hyperlinkPage: HyperlinkPage;
};
export const test = base.extend<HerokuFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  checkboxPage: async ({ page }, use) => {
    const checkboxPage = new CheckboxPage(page);
    await use(checkboxPage);
  },
  dropdownListPage: async ({ page }, use) => {
    const dropdownlistPage = new DropdownListPage(page);
    await use(dropdownlistPage);
  },
  dropdownAreaPage: async ({ page }, use) => {
    const dropdownAreaPage = new DropdownAreaPage(page);
    await use(dropdownAreaPage);
  },
  hyperlinkPage: async ({ page }, use) => {
    const hyperlinkPage = new HyperlinkPage(page);
    await use(hyperlinkPage);
  },
});

export { expect } from "@playwright/test";
