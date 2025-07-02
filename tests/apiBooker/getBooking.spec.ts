import { test, expect } from "@playwright/test";
import { z } from "zod";

test("get booking ids", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();

  /*Verify response schema*/
  //Verify json is an array
  expect(Array.isArray(responseBody)).toBeTruthy();
  //Verify array is not empty
  expect(responseBody.length).toBeGreaterThan(0);

  //Verify each item in the array has an id property
  responseBody.forEach((item: any) => {
    expect(item).toHaveProperty("bookingid");
    expect(typeof item.bookingid).toBe("number");
  });
});

test("get booking ids and verify schema response by zod", async ({
  request,
}) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  const bookingSchema = z.array(
    z.object({
      bookingid: z.number(),
    })
  );

  expect(() => bookingSchema.parse(responseBody)).not.toThrow();

  //   /*Verify response schema*/
  //   //Verify json is an array
  //   expect(Array.isArray(responseBody)).toBeTruthy();
  //   //Verify array is not empty
  //   expect(responseBody.length).toBeGreaterThan(0);

  //   //Verify each item in the array has an id property
  //   responseBody.forEach((item: any) => {
  //     expect(item).toHaveProperty("bookingid");
  // expect(typeof item.bookingid).toBe("number");
  //   });
});
