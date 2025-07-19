import { Page, Locator } from "@playwright/test";

export class UploadPage {
  readonly page: Page;
  readonly uploadButton: Locator;
  readonly chooseFileButton: Locator;
  readonly uploadedFiles: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uploadButton = page.getByRole("button", { name: "Upload" });
    this.chooseFileButton = page.getByRole("button", { name: "Choose File" });
    this.uploadedFiles = page.locator("#uploaded-files");
  }

  async goto() {
    await this.page.goto("/upload");
  }

  async uploadFile(filePath: string) {
    await this.page.setInputFiles('input[type="file"]', filePath);
    await this.uploadButton.click();
  }

  async chooseFileAndUpload(filePath: string) {
    await this.chooseFileButton.setInputFiles(filePath);
    await this.uploadButton.click();
  }
}
