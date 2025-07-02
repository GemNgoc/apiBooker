import { test, expect } from "@playwright/test";
import { z } from "zod";

test("delete booking", async ({ request }) => {
  const response = await request.delete(
    "https://restful-booker.herokuapp.com/booking/1404"
  );
  expect(response.status()).toBe(201);
});
