import { test, expect } from "@playwright/test";

test(`able to upload a file using locator`, async ({ page }) => {
  await page.goto("/upload");

  const filePath = "image/meoxinh1.jpg";
  //selectInputFiles gợi cho ta biết element có thẻ là input
  await page.setInputFiles('input[type = "file"]', filePath);

  await page.getByRole("button", { name: "Upload" }).click();

  await expect(page.locator("#uploaded-files")).toContainText("meoxinh1.jpg");
});

test(`able to upload a file using ARIA`, async ({ page }) => {
  await page.goto("/upload");

  const filePath = "image/meoxinh1.jpg";
  //selectInputFiles gợi cho ta biết element có thẻ là input
  await page
    .getByRole("button", { name: "Choose File" })
    .setInputFiles(filePath);

  await page.getByRole("button", { name: "Upload" }).click();

  await expect(page.locator("#uploaded-files")).toContainText("meoxinh1.jpg");
});
