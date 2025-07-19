# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

recording\todotask.spec.ts:3 › test

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: getByTestId('todo-item-label')
Expected string: "task 3"
Received string: "task 1"
Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for getByTestId('todo-item-label')
    9 × locator resolved to <label data-testid="todo-item-label">task 1</label>
      - unexpected value "task 1"

```

# Page snapshot

```yaml
- complementary:
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
    - blockquote:
        - paragraph: “ React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes. ”
        - link "React":
            - /url: http://facebook.github.io/react
    - separator
    - heading "Official Resources" [level=4]
    - list:
        - listitem:
            - link "Quick Start":
                - /url: https://react.dev/learn
        - listitem:
            - link "API Reference":
                - /url: https://react.dev/reference/react
        - listitem:
            - link "Philosophy":
                - /url: https://petehuntsposts.quora.com/React-Under-the-Hood
        - listitem:
            - link "React Community":
                - /url: https://react.dev/community
    - heading "Community" [level=4]
    - list:
        - listitem:
            - link "ReactJS on Stack Overflow":
                - /url: https://stackoverflow.com/questions/tagged/reactjs
    - separator
    - emphasis:
        - text: If you have other helpful links to share, or find any of the links above no longer work, please
        - link "let us know":
            - /url: https://github.com/tastejs/todomvc/issues
        - text: .
- heading "todos" [level=1]
- textbox "New Todo Input"
- text: New Todo Input
- main:
    - checkbox "❯ Toggle All Input"
    - text: ❯ Toggle All Input
    - list:
        - listitem:
            - checkbox
            - text: task 1
- text: 1 item left!
- list:
    - listitem:
        - link "All":
            - /url: "#/"
    - listitem:
        - link "Active":
            - /url: "#/active"
    - listitem:
        - link "Completed":
            - /url: "#/completed"
- button "Clear completed" [disabled]
- contentinfo:
    - paragraph: Double-click to edit a todo
    - paragraph: Created by the TodoMVC Team
    - paragraph:
        - text: Part of
        - link "TodoMVC":
            - /url: http://todomvc.com
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  |
  3  | test("test", async ({ page }) => {
  4  |   await page.goto("https://todomvc.com/examples/react/dist/");
  5  |   await page.getByTestId("text-input").click();
  6  |   await page.getByTestId("text-input").fill("task 1");
  7  |   await page.getByTestId("text-input").press("Enter");
> 8  |   await expect(page.getByTestId("todo-item-label")).toContainText("task 3");
     |                                                     ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
  9  |   await expect(page.getByTestId("todo-item-label")).toBeVisible();
  10 | });
  11 |
```
