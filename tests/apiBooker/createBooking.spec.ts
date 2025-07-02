import { test, expect } from "@playwright/test";

test(`create booking`, async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: {
        firstname: "FN_Buddy",
        lastname: "LN_Buddy",
        totalprice: 120,
        depositpaid: true,
        bookingdates: { checkin: "2025-07-01", checkout: "2025-07-09" },
        additionalneeds: "Lunch",
      },
    }
  );
  expect(response.status()).toBe(200);
  //"bookingid" returned: 1404
});
