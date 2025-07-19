import { Page, Locator } from "@playwright/test";
export class JsAlertPage {
  readonly page: Page;
  readonly jsAlertButton: Locator;
  readonly jsConfirmButton: Locator;
  readonly jsPromptButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jsAlertButton = page.getByRole("button", {
      name: "Click for JS Alert",
    });
    this.jsConfirmButton = page.getByRole("button", {
      name: "Click for JS Confirm",
    });
    this.jsPromptButton = page.getByRole("button", {
      name: "Click for JS Prompt",
    });
  }

  async goto() {
    await this.page.goto("/javascript_alerts");
  }

  async clickJsAlertButton() {
    this.jsAlertButton.click();
  }

  async clickJsConfirmButton() {
    this.jsConfirmButton.click();
  }

  async clickJsPromptButton() {
    this.jsPromptButton.click();
  }
  getMessageResult(message: string): Locator {
    return this.page.getByText(message);
  }
}
