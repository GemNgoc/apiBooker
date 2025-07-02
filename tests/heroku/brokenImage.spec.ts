import { test, expect } from "@playwright/test";

test("able to check broken image", async ({ page }) => {
  await page.goto("/broken_images");

  const images = page.locator("img"); //Lấy locator có thẻ img

  const allImages = await images.all(); // Lấy hết số lượng các thẻ img

  for (const image of allImages) {
    const imgSrc = await image.getAttribute("src"); // lấy value trong src
    expect(imgSrc?.length).toBeGreaterThan(1); // ktra src lớn hơn 1
    const res = await page.request.get(
      "https://the-internet.herokuapp.com/" + imgSrc
    );
    expect(res.status()).toBe(200); // ảnh không bi broken thì trả về status 200
  }
});
