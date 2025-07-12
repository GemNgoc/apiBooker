import { Page, Locator } from "@playwright/test";

export class HyperlinkPage {
  readonly page: Page;
  readonly statusCodesLink: Locator;
  readonly GoHere: Locator;

  constructor(page: Page) {
    this.page = page;
    this.statusCodesLink;
    this.GoHere = page.getByRole("link", { name: "here" });
  }

  async goto() {
    await this.page.goto("/status_codes");
  }

  async clickStatusCode(statusCode: string) {
    await this.page.getByRole("link", { name: statusCode }).click();
  }

  async filterStatusCode(statusCode: string) {
    await this.page
      .getByRole("listitem")
      .filter({ hasText: statusCode })
      .getByRole("link")
      .click();
  }

  getStatusCodeMessage(statusCode: string): Locator {
    return this.page.getByText(
      `This page returned a ${statusCode} status code.`
    );
  }

  async clickGoHere() {
    await this.GoHere.click();
  }
}
