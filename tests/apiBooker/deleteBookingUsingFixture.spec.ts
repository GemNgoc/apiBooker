import { test, expect } from "./fixtures/apiTokenFixture";

test(`update booking`, async ({ request, apiToken, bookingID }) => {
  //A: Arrange: login to get auth token
  //   get token from "./fixtures/apiTokenFixture", hàm này được gán vô biến apiToken

  //A: Arrange: get a booking id
  //   get bookingID from "./fixtures/apiTokenFixture", hàm này được gán vô biến bookingID

  //A: Action: call request to update booking

  console.log(`bookingID: ${bookingID}`);
  const deleteBookingIdRes = await request.delete(
    `https://restful-booker.herokuapp.com/booking/${bookingID}`,
    {
      headers: {
        Cookie: `token=${apiToken}`, // Include the auth token in the request headers
      },
    }
  );

  //A: Assert: assert status code
  expect(deleteBookingIdRes.status()).toBe(201);
  expect(deleteBookingIdRes).toBeTruthy();
});
