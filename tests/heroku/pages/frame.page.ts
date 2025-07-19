import { Page, FrameLocator, Locator } from "@playwright/test";

export class FramePage {
  readonly page: Page;
  readonly topFrame: FrameLocator;
  readonly leftFrame: FrameLocator;
  readonly middleFrame: FrameLocator;
  readonly rightFrame: FrameLocator;
  readonly bottomFrame: FrameLocator;

  constructor(page: Page) {
    this.page = page;
    this.topFrame = page.frameLocator('[name="frame-top"]');
    this.leftFrame = this.topFrame.frameLocator('[name="frame-left"]');
    this.middleFrame = this.topFrame.frameLocator('[name="frame-middle"]');
    this.rightFrame = this.topFrame.frameLocator('[name="frame-right"]');
    this.bottomFrame = page.frameLocator('[name="frame-bottom"]');
  }

  async goto() {
    await this.page.goto("/nested_frames");
  }
  getFrameContent(frame: FrameLocator, name: string): Locator {
    if (frame === this.leftFrame) {
      return frame.locator("body").getByText(name);
    } else if (frame === this.middleFrame) {
      return frame.locator("body").getByText(name);
    } else if (frame === this.rightFrame) {
      return frame.locator("body").getByText(name);
    } else if (frame === this.bottomFrame) {
      return frame.locator("body").getByText(name);
    } else return this.page.locator("body");
  }
}
