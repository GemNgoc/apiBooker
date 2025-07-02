import { test, expect } from "@playwright/test";

test(`able to right click`, async ({ page }) => {
  await page.goto("/context_menu");

  await page.locator("#hot-spot").click({ button: "right" });

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toBe("You selected a context menu");
    await dialog.accept();
  });
});
