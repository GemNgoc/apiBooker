import { test, expect } from "@playwright/test";

test(`update booking`, async ({ request }) => {
  const response = await request.put(
    "https://restful-booker.herokuapp.com/booking/1404",
    {
      data: {
        firstname: "FN_Buddy_update",
        lastname: "LN_Buddy_updated",
        totalprice: 122,
        depositpaid: true,
        bookingdates: { checkin: "2025-07-10", checkout: "2025-07-12" },
        additionalneeds: "Dinner",
      },
    }
  );
  expect(response.status()).toBe(200);
  //updated on bookingID 1404
});
