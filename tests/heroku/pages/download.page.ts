import { Download, Page } from "@playwright/test";
// import { Page, Download } from "@playwright/test";
export class DownloadPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    // this.downloadLink = page.getByRole("link", { name: "meoxinh1.jpg" });
  }

  async goto() {
    await this.page.goto("/download");
  }

  async downloadFile(fileName: string): Promise<Download> {
    const [downloadFile] = await Promise.all([
      this.page.waitForEvent("download"),
      this.page.getByRole("link", { name: fileName }).click(),
    ]);
    return await downloadFile;
  }
  async saveFile(downloadFile: Download, filePath: string) {
    console.log(`Saving file to: ${filePath}`);
    await downloadFile.saveAs(filePath);
  }
}
