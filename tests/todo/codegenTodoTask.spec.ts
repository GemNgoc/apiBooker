import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://todomvc.com/examples/react/dist/");
  await page.getByTestId("text-input").click();
  await page.getByTestId("text-input").fill("task 1");
  await page.getByTestId("text-input").press("Enter");
  await expect(page.getByTestId("todo-item-label")).toContainText("task 1");
  await expect(page.getByTestId("todo-item-label")).toBeVisible();
});
