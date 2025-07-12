import { test, expect } from "@playwright/test";

test(`able to close a popup`, async ({ page }) => {
  await page.addLocatorHandler(
    await page.getByRole("heading", { name: "THIS IS A MODAL WINDOW" }),
    async () => {
      await page.getByText("Close").click();
    }
  );

  await page.goto("/entry_ad");
  await expect(page.getByRole("link", { name: "click here" })).toBeVisible();
  await page.getByRole("link", { name: "click here" }).click();

  // Đây là đoạn code để muốn show popup, trong thực tế khi chạy với Playwright có hàm 'addLocatorHandler' ở trên
  // thì popup này sẽ không visible để catch được element. Vì vậy cố tình show popup thì hàm expect luôn failed.

  // await expect(
  //   page.getByRole("heading", { name: "THIS IS A MODAL WINDOW" })
  // ).toBeVisible();
});
