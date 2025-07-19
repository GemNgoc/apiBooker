import { Page, Locator } from "@playwright/test";

export class HoverPage {
  readonly page: Page;
  readonly userAvatars: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userAvatars = page.getByRole("img", { name: "User Avatar" });
  }

  async goto() {
    await this.page.goto("/hovers");
  }

  async hoverOverAvatar(index: number) {
    await this.userAvatars.nth(index).hover();
  }

  getUserName(username: string): Locator {
    return this.page.getByText(username);
  }
}
