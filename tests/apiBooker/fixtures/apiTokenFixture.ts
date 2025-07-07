import { test as setup, expect } from "@playwright/test";
// This file defines a fixture for Playwright tests that retrieves an API token
// from a RESTful Booker API endpoint and makes it available to tests.
type BookingFixture = {
  apiToken: string | null;
  bookingID: number | null;
};

export const test = setup.extend<BookingFixture>({
  apiToken: async ({ request }, use) => {
    const createTokenRes = await request.post(
      "https://restful-booker.herokuapp.com/auth",
      {
        data: { username: "admin", password: "password123" },
      }
    );

    expect(createTokenRes.status()).toBe(200);
    const createTokenResBody = await createTokenRes.json();
    const token = createTokenResBody.token;

    await use(token);
  },

  bookingID: async ({ request }, use) => {
    const getBookingRes = await request.get(
      "https://restful-booker.herokuapp.com/booking"
    );
    expect(getBookingRes.status()).toBe(200);
    const getBookingResBody = await getBookingRes.json();
    //Assuming we take the first booking id for testing
    const bookingId = getBookingResBody[0].bookingid;

    await use(bookingId);
  },
});

export { expect } from "@playwright/test";
