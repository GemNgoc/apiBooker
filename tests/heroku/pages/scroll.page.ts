import { Page, Locator } from "@playwright/test";

export class ScrollPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/infinite_scroll");
  }

  scrollTo(element: string): Locator {
    return this.page.getByText(element);
  }

  async scrollDown(times: number, delay: number = 1000) {
    for (let i = 0; i < times; i++) {
      await this.page.mouse.wheel(0, 1000);
      await this.page.waitForTimeout(delay);
    }
  }

  async scrollUp(times: number, delay: number = 1000) {
    for (let i = 0; i < times; i++) {
      await this.page.mouse.wheel(0, -1000);
      await this.page.waitForTimeout(delay);
    }
  }
}
