import { Page, Locator } from "@playwright/test";

export class HorizontalSliderPage {
  readonly page: Page;
  readonly slider: Locator;

  constructor(page: Page) {
    this.page = page;
    this.slider = page.locator(".sliderContainer input");
  }

  async goto() {
    await this.page.goto("/horizontal_slider");
  }

  async fillSlider(value: string) {
    await this.slider.fill(value);
  }
  async pressArrowRightUntilValue(range: number) {
    while (parseFloat(await this.slider.inputValue()) < range) {
      await this.slider.press("ArrowRight");
    }
  }
}
