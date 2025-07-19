import { test, expect } from "@playwright/test";

test("able to check if broken image", async ({ page }) => {
  await page.goto("/broken_images");

  const images = page.locator("img"); //Lấy locator có thẻ img

  const allImages = await images.all(); // Lấy hết số lượng các thẻ img

  for (const image of allImages) {
    const imgSrc = await image.getAttribute("src"); // lấy value trong src
    expect(imgSrc?.length).toBeGreaterThan(1); // ktra src lớn hơn 1
    const res = await page.request.get(
      "https://the-internet.herokuapp.com/" + imgSrc
    );
    //TC này đang kiểm tra broken image hay không
    // nên việc trả ra status không là 200 chứng tỏ ảnh đang bị broken và cần báo bug
    console.error(`Broken image found: ${imgSrc}`);
    expect(res.status()).toBe(200); // ảnh không bi broken thì trả về status 200
  }
});
