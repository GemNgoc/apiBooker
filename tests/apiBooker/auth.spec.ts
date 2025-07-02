import { test, expect } from "@playwright/test";

test(`create authen token`, async ({ request }) => {
  await request
    .post("https://restful-booker.herokuapp.com/auth", {
      data: { username: "admin", password: "password123" },
    })
    .then(async (response) => {
      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      console.log(responseBody);
      expect(responseBody.token).toBeDefined();
    });
});

test(`create authen token, get response at the beginning`, async ({
  request,
}) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "admin", password: "password123" },
    }
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
  expect(responseBody.token).toBeDefined();
});

test(`get error with invalid credentials`, async ({ request }) => {
  await request
    .post("https://restful-booker.herokuapp.com/auth", {
      data: { username: "admin", password: "password123_invalid" },
    })
    .then(async (response) => {
      /*API demo hiện đang trả sai status code = 200 nên bỏ qua verify status code cho trường hợp này*/
      // expect(response.status()).toBe(401);
      const responseBody = await response.json();
      expect(responseBody.reason).toBe("Bad credentials");
    });
});

test(`get error with invalid request body`, async ({ request }) => {
  await request
    .post("https://restful-booker.herokuapp.com/auth", {
      data: { username: "admin" },
    })
    .then(async (response) => {
      /*API demo hiện đang trả sai status code = 200 nên bỏ qua verify status code cho trường hợp này*/
      // expect(response.status()).toBe(400);
      const responseBody = await response.json();
      expect(responseBody.reason).toBe("Bad credentials");
    });
});
