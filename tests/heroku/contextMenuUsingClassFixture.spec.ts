import { test, expect } from "./fixtures/heroku.fixture";

test(`able to right click using Class Fixture`, async ({ contextMenuPage }) => {
  // Navigate to https://the-internet.herokuapp.com/context_menu
  await contextMenuPage.goto();

  // Right click on the hotspot area
  await contextMenuPage.rightClickHotSpot();

  // Verify the dialog message
  contextMenuPage.verifyDialogMessage("You selected a context menu");
  //   expect(
  //     contextMenuPage.page.on("dialog", async (dialog) => {
  //       expect(dialog.message()).toBe("You selected a context menu");
  //       await dialog.accept();
  //     })
  //   );

  // Accept the dialog that appears
  await contextMenuPage.acceptDialog();
});
