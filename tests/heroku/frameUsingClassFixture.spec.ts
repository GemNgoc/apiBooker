import { test, expect } from "./fixtures/heroku.fixture";
test(`able to get the content in a frame using Class Fixture`, async ({
  framePage,
}) => {
  await framePage.goto();

  await expect(
    framePage.getFrameContent(framePage.leftFrame, "LEFT")
  ).toHaveText("LEFT");
  await expect(
    framePage.getFrameContent(framePage.middleFrame, "MIDDLE")
  ).toHaveText("MIDDLE");
  await expect(
    framePage.getFrameContent(framePage.rightFrame, "RIGHT")
  ).toHaveText("RIGHT");
  await expect(
    framePage.getFrameContent(framePage.bottomFrame, "BOTTOM")
  ).toHaveText("BOTTOM");
});
