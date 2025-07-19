import { Page, Locator } from "@playwright/test";
export class CheckboxPage {
  readonly page: Page;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  //   constructor(page: Page) {
  //     this.page = page;
  //     this.checkbox1 = page.locator("input[type=checkbox]").nth(0);
  //     this.checkbox2 = page.locator("input[type=checkbox]").nth(1);
  //   }
  constructor(page: Page) {
    this.page = page;
    this.checkbox1 = page.getByRole("checkbox").first();
    this.checkbox2 = page.getByRole("checkbox").nth(1);
  }

  async goto() {
    await this.page.goto("/checkboxes");
  }

  async checkCheckbox1() {
    await this.checkbox1.check();
  }
  async uncheckCheckbox2() {
    await this.checkbox2.uncheck();
  }
}
