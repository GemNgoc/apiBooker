import { test, expect } from "@playwright/test";

test(`able to work on horizontal slider with fill`, async ({ page }) => {
  await page.goto("/horizontal_slider");

  const slider = await page.locator(".sliderContainer input");

  await expect(slider).toHaveValue("0");

  // hàm này cho phép slider chạy tới điểm 3.5.
  // Dùng được fill vì element slider này là input (lấy từ class vô tới input)
  await slider.fill("3.5");

  //Ktra bằng toHaveValue vì sự kiên này sẽ thay đổi theo Onchange trên value
  // Nếu dùng toHaveText thì sẽ failed vì element slider lúc này đang lấy ở input, không get text ở span được
  await expect(slider).toHaveValue("3.5");
});

test(`able to work on horizontal slider with press Arrow Right`, async ({
  page,
}) => {
  await page.goto("/horizontal_slider");

  const slider = await page.locator(".sliderContainer input");

  await expect(slider).toHaveValue("0");

  const range = 3.5;
  while (parseFloat(await slider.inputValue()) < range) {
    await slider.press("ArrowRight"); // Mỗi lần ArrowRight = 0.5 như step = 0.5 trong HTML defined
  }

  //Ktra bằng toHaveValue vì sự kiên này sẽ thay đổi theo Onchange trên value
  // Nếu dùng toHaveText thì sẽ failed vì element slider lúc này đang lấy ở input, không get text ở span được
  await expect(slider).toHaveValue("3.5");
});
