import { Page, Locator } from "@playwright/test";

export class BrokenImagePage {
  readonly page: Page;
  readonly images: Locator;

  constructor(page: Page) {
    this.page = page;
    this.images = this.page.locator("img");
  }

  async goto() {
    await this.page.goto("/broken_images");
  }

  async checkBrokenImages(): Promise<number> {
    const allImages = await this.images.all();
    for (const image of allImages) {
      const imgSrc = await image.getAttribute("src");
      if (imgSrc && imgSrc.length >= 1) {
        const response = await this.page.request.get(
          "https://the-internet.herokuapp.com/" + imgSrc
        );
        if (response.status() !== 200) {
          //   throw new Error(`Broken image found: ${imgSrc}`);
          console.error(`Broken image found: ${imgSrc}`);
          return response.status(); // Return 404 if broken image is found
        }
      }
    }
    return 200; // Return 200 if no broken images are found
  }
}
