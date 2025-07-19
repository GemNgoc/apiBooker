import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { CheckboxPage } from "../pages/checkbox.page";
// import { DropdownListPage } from "../pages/dropdownlist.page";
import { DropdownListPage } from "../pages/dropdownList.page";
import { DropdownAreaPage } from "../pages/dropdownArea.page";
import { HyperlinkPage } from "../pages/hyperlink.page";
import { FramePage } from "../pages/frame.page";
import { PopupPage } from "../pages/popup.page";
import { JsAlertPage } from "../pages/jsalert.page";
import { BrokenImagePage } from "../pages/brokenImage.page";
import { LoadingProgressPage } from "../pages/loadingProgress.page";
import { HoverPage } from "../pages/hover.page";
import { DragDropPage } from "../pages/dragDrop.page";
import { HorizontalSliderPage } from "../pages/horizontalSlider.page";
import { ScrollPage } from "../pages/scroll.page";
import { UploadPage } from "../pages/upload.page";
import { DownloadPage } from "../pages/download.page";
import { ContextMenuPage } from "../pages/contextMenu.page";
import { KeyPressesPage } from "../pages/keyPresses.page";
import { GeolocationPage } from "../pages/geolocation.page";
import { WebTablePage } from "../pages/webTable.page";

type HerokuFixtures = {
  loginPage: LoginPage;
  checkboxPage: CheckboxPage;
  dropdownListPage: DropdownListPage;
  dropdownAreaPage: DropdownAreaPage;
  hyperlinkPage: HyperlinkPage;
  framePage: FramePage;
  popupPage: PopupPage;
  jsAlertPage: JsAlertPage;
  brokenImagePage: BrokenImagePage;
  loadingProgressPage: LoadingProgressPage;
  hoverPage: HoverPage;
  dragDropPage: DragDropPage;
  horizontalSliderPage: HorizontalSliderPage;
  scrollPage: ScrollPage;
  uploadPage: UploadPage;
  downloadPage: DownloadPage;
  contextMenuPage: ContextMenuPage;
  keyPressesPage: KeyPressesPage;
  geolocationPage: GeolocationPage;
  webTablePage: WebTablePage;
};
export const test = base.extend<HerokuFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  checkboxPage: async ({ page }, use) => {
    const checkboxPage = new CheckboxPage(page);
    await use(checkboxPage);
  },
  dropdownListPage: async ({ page }, use) => {
    const dropdownlistPage = new DropdownListPage(page);
    await use(dropdownlistPage);
  },
  dropdownAreaPage: async ({ page }, use) => {
    const dropdownAreaPage = new DropdownAreaPage(page);
    await use(dropdownAreaPage);
  },
  hyperlinkPage: async ({ page }, use) => {
    const hyperlinkPage = new HyperlinkPage(page);
    await use(hyperlinkPage);
  },
  framePage: async ({ page }, use) => {
    const framePage = new FramePage(page);
    await use(framePage);
  },
  popupPage: async ({ page }, use) => {
    const popupPage = new PopupPage(page);
    await popupPage.locatorHandler();
    await use(popupPage);
  },
  jsAlertPage: async ({ page }, use) => {
    const jsAlertPage = new JsAlertPage(page);
    await use(jsAlertPage);
  },
  brokenImagePage: async ({ page }, use) => {
    const brokenImagePage = new BrokenImagePage(page);
    await use(brokenImagePage);
  },
  loadingProgressPage: async ({ page }, use) => {
    const loadingProgressPage = new LoadingProgressPage(page);
    await use(loadingProgressPage);
  },
  hoverPage: async ({ page }, use) => {
    const hoverPage = new HoverPage(page);
    await use(hoverPage);
  },
  dragDropPage: async ({ page }, use) => {
    const dragDropPage = new DragDropPage(page);
    await use(dragDropPage);
  },
  horizontalSliderPage: async ({ page }, use) => {
    const horizontalSliderPage = new HorizontalSliderPage(page);
    await use(horizontalSliderPage);
  },
  scrollPage: async ({ page }, use) => {
    const scrollPage = new ScrollPage(page);
    await use(scrollPage);
  },
  uploadPage: async ({ page }, use) => {
    const uploadPage = new UploadPage(page);
    await use(uploadPage);
  },
  downloadPage: async ({ page }, use) => {
    const downloadPage = new DownloadPage(page);
    await use(downloadPage);
  },
  contextMenuPage: async ({ page }, use) => {
    const contextMenuPage = new ContextMenuPage(page);
    await use(contextMenuPage);
  },
  keyPressesPage: async ({ page }, use) => {
    const keyPressesPage = new KeyPressesPage(page);
    await use(keyPressesPage);
  },
  geolocationPage: async ({ page }, use) => {
    const geolocationPage = new GeolocationPage(page);
    await use(geolocationPage);
  },
  webTablePage: async ({ page }, use) => {
    const webTablePage = new WebTablePage(page);
    await use(webTablePage);
  },
});

export { expect } from "@playwright/test";
