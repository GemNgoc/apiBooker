import { Page, Locator } from "@playwright/test";

export class DropdownListPage {
  readonly page: Page;
  readonly dropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dropdown = page.locator("#dropdown");
  }

  async goto() {
    await this.page.goto("/dropdown");
  }

  async selectOptionByLabel(label: string) {
    await this.dropdown.selectOption({ label });
  }

  async selectOptionByValue(value: string) {
    await this.dropdown.selectOption(value);
  }

  getSelectedValue(): Promise<string> {
    return this.dropdown.inputValue();
  }
}
