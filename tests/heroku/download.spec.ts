import { test, expect } from "@playwright/test";
import fs from "fs";

test(`download a file`, async ({ page }) => {
  await page.goto("/download");

  //Action waitForEvent 'download'
  const [downloadFile] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("link", { name: "meoxinh1.jpg" }).click(),
  ]);

  //Ktra mang downloadFile có file cần download không
  const suggestedFilename = downloadFile.suggestedFilename();
  expect(suggestedFilename).toBe("meoxinh1.jpg");

  //Save As file
  const filePath = "download/" + suggestedFilename;
  await downloadFile.saveAs(filePath);
  expect(fs.existsSync(filePath)).toBeTruthy();
});

test(`download multiple files`, async ({ page }) => {
  await page.goto("/download");

  const fileNames = ["meoxinh.jpg", "meoxinh1.jpg"];

  for (const fileName of fileNames) {
    //Action waitForEvent 'download'
    const [downloadFile] = await Promise.all([
      page.waitForEvent("download"),
      page.getByRole("link", { name: fileName }).first().click(),
    ]);

    //Ktra mang downloadFile có file cần download không
    const suggestedFilename = downloadFile.suggestedFilename();
    expect(suggestedFilename).toBe(fileName);

    //Save As file
    const filePath = "download/" + suggestedFilename;
    await downloadFile.saveAs(filePath);
    expect(fs.existsSync(filePath)).toBeTruthy();
  }
});
