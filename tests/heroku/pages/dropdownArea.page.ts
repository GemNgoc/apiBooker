import { Page, Locator } from "@playwright/test";

export class DropdownAreaPage {
  readonly page: Page;
  readonly fruitsDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fruitsDropdown = page.locator("#fruits");
  }

  async goto() {
    await this.page.goto("https://output.jsbin.com/osebed/2");
  }

  async selectFruits(fruits: string[]) {
    await this.fruitsDropdown.selectOption(fruits);
  }

  async getSelectedFruits(): Promise<string> {
    return this.fruitsDropdown.inputValue();
  }
}
