import { Page, Locator } from "@playwright/test";

export class DragDropPage {
  readonly page: Page;
  readonly source: Locator;
  readonly target: Locator;

  constructor(page: Page) {
    this.page = page;
    this.source = page.locator("#column-a");
    this.target = page.locator("#column-b");
  }

  async goto() {
    await this.page.goto("/drag_and_drop");
  }

  async dragSourceToTarget() {
    await this.source.dragTo(this.target);
  }
}
