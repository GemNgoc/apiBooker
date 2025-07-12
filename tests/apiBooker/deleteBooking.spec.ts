import { test, expect } from "@playwright/test";
import { z } from "zod";

test("delete booking", async ({ request }) => {
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

  //A: Action: call request to delete booking
  const response = await request.delete(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        // "Content-Type": "application/json",
        Cookie: `token=${token}`, // Include the auth token in the request headers
      },
    }
  );
  expect(response.status()).toBe(201);
});
