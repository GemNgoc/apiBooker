import { test, expect } from "./fixtures/apiTokenFixture";

test(`update booking`, async ({ request, apiToken, bookingID }) => {
  //A: Arrange: login to get auth token
  //   get token from "./fixtures/apiTokenFixture", hàm này được gán vô biến apiToken

  //A: Arrange: get a booking id
  //   get bookingID from "./fixtures/apiTokenFixture", hàm này được gán vô biến bookingID

  //A: Action: call request to update booking

  console.log(`bookingID: ${bookingID}`);
  const updateBookingIdRes = await request.put(
    `https://restful-booker.herokuapp.com/booking/${bookingID}`,
    {
      data: {
        firstname: "FN_Buddy_updated",
        lastname: "LN_Buddy_updated",
        totalprice: 122,
        depositpaid: true,
        bookingdates: { checkin: "2025-07-10", checkout: "2025-07-12" },
        additionalneeds: "Dinner",
      },
      headers: {
        // "Content-Type": "application/json",
        Cookie: `token=${apiToken}`, // Include the auth token in the request headers
      },
    }
  );

  //A: Assert: assert status code and response body schema
  expect(updateBookingIdRes.status()).toBe(200);
  const responseBody = await updateBookingIdRes.json();
  console.log(responseBody);
  expect(responseBody).toEqual({
    firstname: "FN_Buddy_updated",
    lastname: "LN_Buddy_updated",
    totalprice: 122,
    depositpaid: true,
    bookingdates: { checkin: "2025-07-10", checkout: "2025-07-12" },
    additionalneeds: "Dinner",
  });
});
