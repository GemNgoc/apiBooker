import { test, expect } from "./fixtures/heroku.fixture";

test.describe("Upload Tests using Class Fixture", () => {
  const filePath1 = "image/meoxinh1.jpg";
  const resultFile1 = "meoxinh1.jpg";
  const filePath2 = "image/meoxinh2.jpg";
  const resultFile2 = "meoxinh2.jpg";

  test.beforeEach(async ({ uploadPage }) => {
    await uploadPage.goto();
  });

  test(`able to upload a file using locator`, async ({ uploadPage }) => {
    await uploadPage.uploadFile(filePath1);
    await expect(uploadPage.uploadedFiles).toContainText(resultFile1);
  });

  test(`able to upload a file using ARIA`, async ({ uploadPage }) => {
    await uploadPage.chooseFileAndUpload(filePath2);
    await expect(uploadPage.uploadedFiles).toContainText(resultFile2);
  });
});
