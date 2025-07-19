import { Page, Locator, expect } from "@playwright/test";

export class ContextMenuPage {
  readonly page: Page;
  readonly hotSpot: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hotSpot = page.locator("#hot-spot");
  }

  async goto() {
    await this.page.goto("/context_menu");
  }

  async rightClickHotSpot() {
    await this.hotSpot.click({ button: "right" });
  }

  verifyDialogMessage(expectedMessage: string) {
    this.page.on("dialog", async (dialog) => {
      expect(dialog.message()).toBe(expectedMessage);
      //   await dialog.accept();
    });
  }
  async acceptDialog() {
    this.page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
  }
}
