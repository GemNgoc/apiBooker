import { Page, Locator } from "@playwright/test";

export class GeolocationPage {
  readonly page: Page;
  readonly latitudeValue: Locator;
  readonly longitudeValue: Locator;
  readonly whereAmIButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.latitudeValue = page.locator("#lat-value");
    this.longitudeValue = page.locator("#long-value");
    this.whereAmIButton = page.getByRole("button", { name: "Where am I?" });
  }

  async goto() {
    await this.page.goto("/geolocation");
  }
  async clickWhereAmI() {
    await this.whereAmIButton.click();
  }
  async getLatitude() {
    return await this.latitudeValue.textContent();
  }
  async getLongitude() {
    return await this.longitudeValue.textContent();
  }
}
