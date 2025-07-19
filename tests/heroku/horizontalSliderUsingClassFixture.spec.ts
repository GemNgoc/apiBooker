import { test, expect } from "./fixtures/heroku.fixture";

test.describe("Horizontal Slider using Class Fixture", () => {
  const range = 3.5;

  test.beforeEach(async ({ horizontalSliderPage }) => {
    await horizontalSliderPage.goto();
  });

  test(`able to work on horizontal slider with fill`, async ({
    horizontalSliderPage,
  }) => {
    await expect(horizontalSliderPage.slider).toHaveValue("0");

    await horizontalSliderPage.fillSlider(range.toString());

    await expect(horizontalSliderPage.slider).toHaveValue(range.toString());
  });

  test(`able to work on horizontal slider with press Arrow Right`, async ({
    horizontalSliderPage,
  }) => {
    await expect(horizontalSliderPage.slider).toHaveValue("0");

    await horizontalSliderPage.pressArrowRightUntilValue(range);

    await expect(horizontalSliderPage.slider).toHaveValue(range.toString());
  });
});
export type HerokuFixtures = {
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
};
