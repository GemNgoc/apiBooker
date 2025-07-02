import { test, expect } from "@playwright/test";
/*
## TC06: Frame : Nested frames
    Open browser
    Navigate to https://the-internet.herokuapp.com/nested_frames
    Verify Text present:

Copy

Copy
          LEFT

          RIGHT

          MIDDLE

          BOTTOM
*/

test(`able to get the content in a frame`, async ({ page }) => {
  await page.goto("/nested_frames");

  const topFrame = await page.frameLocator('[name="frame-top"]');
  const leftFrame = topFrame.frameLocator('[name="frame-left"]');
  await expect(leftFrame.locator("body")).toHaveText("LEFT");

  const middleFrame = await topFrame.frameLocator('[name="frame-middle"]');
  await expect(middleFrame.locator("body")).toHaveText("MIDDLE");

  const rightFrame = await topFrame.frameLocator('[name="frame-right"]');
  await expect(rightFrame.locator("body")).toHaveText("RIGHT");

  const bottomFrame = await page.frameLocator('[name="frame-bottom"]');
  await expect(bottomFrame.locator("body")).toHaveText("BOTTOM");
});
