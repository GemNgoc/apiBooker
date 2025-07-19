import { test, expect } from "@playwright/test";

test("verify snapshot", async ({ page }) => {
  await page.goto("https://todomvc.com/examples/react/dist/");
  await expect(page.locator("body")).toMatchAriaSnapshot(
    `  - complementary:
       - heading "React" [level=3]
       - heading "React" [level=5]
       - link "Source":
         - /url: https://github.com/tastejs/todomvc/tree/gh-pages/examples/react
       - heading "TypeScript + React" [level=5]
       - link "Demo":
         - /url: https://todomvc.com/examples/typescript-react
       - text: ","
       - link "Source":
          - /url: https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react
       - separator
    `
  );
});
