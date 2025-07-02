import { test, expect } from "@playwright/test";

test.skip(
  `able to select DateTime picker`,
  { tag: "@firefoxOnly" },
  async ({ page }) => {
    const today = new Date();
    const currentDate = today.getDate().toString().padStart(2, "0");
    const currentMonth = (today.getMonth() + 1).toString().padStart(2, "0");
    const currentYear = today.getFullYear();

    await page.goto("/vn/vi/home");
    await page.getByRole("button", { name: "Đồng ý" }).click();
    //   await page.locator("#city-to-roundtrip").click();
    //   await page.getByRole("textbox", { name: "Đến" }).waitFor(); /*timeout được set trong config*/
    await page.getByRole("textbox", { name: "Đến" }).click();
    await page.getByRole("link", { name: "Hà Nội (HAN), Việt Nam" }).click();

    //   await page
    //     .getByRole("table")
    //     .nth(0) /*Vì có 2 table cho thang 6 và 7. Today luôn ở table 1st nên là nth(0)*/
    //     .getByRole("link")
    //     .filter({ hasText: currentDate })
    //     .click();

    //Thay bằng name: currentDate
    await page
      .getByRole("table")
      .nth(0)
      .getByRole("link", { name: currentDate })
      .click();

    await page.getByRole("link", { name: "Một chiều" }).click();

    const departureDate = await page
      .getByRole("textbox", { name: "Ngày đi" })
      .inputValue();

    await expect(departureDate).toBe(
      `${currentDate}/${currentMonth}/${currentYear}`
    );
  }
);
