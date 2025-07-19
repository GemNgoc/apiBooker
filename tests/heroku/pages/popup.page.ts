import { Page, Locator } from "@playwright/test";
export class PopupPage {
  readonly page: Page;
  readonly modalHeading: Locator;
  readonly closeButton: Locator;
  readonly clickHereLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modalHeading = page.getByRole("heading", {
      name: "THIS IS A MODAL WINDOW",
    });
    this.closeButton = page.getByText("Close");
    this.clickHereLink = page.getByRole("link", { name: "click here" });
  }

  async goto() {
    await this.page.goto("/entry_ad");
  }

  async locatorHandler() {
    await this.page.addLocatorHandler(this.modalHeading, async () => {
      await this.closeButton.click();
    });
  }

  getClickHereLink(): Locator {
    return this.clickHereLink;
  }
}
