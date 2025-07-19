import { Page, Locator } from "@playwright/test";

export class LoadingProgressPage {
  readonly page: Page;
  readonly startButton: Locator;
  readonly loadingImage: Locator;
  readonly helloWorldText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.startButton = page.getByRole("button", { name: "Start" });
    this.loadingImage = page.locator("#loading").getByRole("img");
    this.helloWorldText = page.getByRole("heading", {
      name: "Hello World!",
    });
  }
  async goto() {
    await this.page.goto("/dynamic_loading/1");
  }
  async startLoading() {
    await this.startButton.click();
  }
}
