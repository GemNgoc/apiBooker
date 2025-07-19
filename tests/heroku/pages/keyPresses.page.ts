import { Page, Locator } from "@playwright/test";

export class KeyPressesPage {
  readonly page: Page;
  readonly result: Locator;

  constructor(page: Page) {
    this.page = page;
    this.result = page.locator("#result");
  }

  async goto() {
    await this.page.goto("/key_presses");
  }

  async pressKey(key: string) {
    await this.page.keyboard.press(key);
  }
}
