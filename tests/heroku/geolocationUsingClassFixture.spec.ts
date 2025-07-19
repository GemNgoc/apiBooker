import { test, expect } from "./fixtures/heroku.fixture";

test.use({
  geolocation: { latitude: 37.774929, longitude: -122.419416 },
  permissions: ["geolocation"],
});
test("should display fake geolocation", async ({ geolocationPage }) => {
  await geolocationPage.goto();
  await geolocationPage.clickWhereAmI();

  const latitude = await geolocationPage.getLatitude();
  const longitude = await geolocationPage.getLongitude();

  // expect(geolocationPage.latitudeValue).toHaveText("37.774929");
  // expect(geolocationPage.longitudeValue).toHaveText("-122.419416");
  expect(latitude).toBe("37.774929");
  expect(longitude).toBe("-122.419416");
});
