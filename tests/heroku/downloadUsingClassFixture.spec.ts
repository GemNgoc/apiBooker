import { test, expect } from "./fixtures/heroku.fixture";
import fs from "fs";

test("download a file using Class Fixture", async ({ downloadPage }) => {
  const fileName = "meoxinh1.jpg";
  const filePath = "download/" + fileName;

  await downloadPage.goto();

  // Action waitForEvent 'download'
  const downloadFile = await downloadPage.downloadFile(fileName);

  // Save the file
  await downloadFile.saveAs(filePath);
  // downloadPage.saveFile(downloadFile, filePath);
  expect(fs.existsSync(filePath)).toBeTruthy();
});

test("download multiple files using Class Fixture", async ({
  downloadPage,
}) => {
  const fileNames = ["meoxinh1.jpg", "meoxinh2.jpg"];

  await downloadPage.goto();

  for (const fileName of fileNames) {
    // Action waitForEvent 'download'
    const downloadFile = await downloadPage.downloadFile(fileName);

    // Save the file
    const filePath = "download/" + downloadFile.suggestedFilename();
    await downloadFile.saveAs(filePath);
    expect(fs.existsSync(filePath)).toBeTruthy();
  }
});
