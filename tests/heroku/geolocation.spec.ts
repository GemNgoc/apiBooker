import { test, expect } from "@playwright/test";

test.use({
  geolocation: { latitude: 37.774929, longitude: -122.419416 },
  permissions: ["geolocation"],
});
test(`fake location`, async ({ page }) => {
  await page.goto("/geolocation");
  await page.getByRole("button", { name: "Where am I?" }).click();

  await expect(page.locator("#lat-value")).toHaveText("37.774929");
  await expect(page.locator("#long-value")).toHaveText("-122.419416");
});
