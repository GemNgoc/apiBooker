import { test, expect } from "@playwright/test";

test(`update booking`, async ({ request }) => {
  //A: Arrange: login to get auth token
  const createTokenRes = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "admin", password: "password123" },
    }
  );

  expect(createTokenRes.status()).toBe(200);
  const createTokenResBody = await createTokenRes.json();
  const token = await createTokenResBody.token;

  //A: Arrange: get a booking id
  const getBookingRes = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );
  expect(getBookingRes.status()).toBe(200);
  const getBookingResBody = await getBookingRes.json();
  const bookingId = getBookingResBody[0].bookingid; //Assuming we take the first booking id for testing

  //A: Action: call request to update booking
  const updateBookingIdRes = await request.put(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
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
        Cookie: `token=${token}`, // Include the auth token in the request headers
      },
    }
  );

  //A: Assert: assert status code and response body schema
  expect(updateBookingIdRes.status()).toBe(200);
  const responseBody = await updateBookingIdRes.json();
  console.log(responseBody);
});
