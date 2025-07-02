import { test, expect } from "@playwright/test";

// test(`check gemngoc.github`, async ({ page }) => {
//   await page.goto("https://gemngoc.github.io/VS_HTML/");
//   await expect(page.getByText("menu item 2.2.1")).toBeVisible();
// });

test("check elements", async ({ page }) => {
  await page.goto("/tables");
  const table1 = await page.locator("#table1");
  const rows = await table1.locator("tbody tr");
  const cntRows = rows.count();

  let persons = [];
  for (let i = 0; i < (await cntRows); i++) {
    const row = rows.nth(i);
    const cells = await row.locator("td");
    persons.push({
      lastName: await cells.nth(0).textContent(),
      firstName: await cells.nth(1).textContent(),
      due: await cells.nth(3).textContent(),
    });
  }
});

test("luyen tap", async ({ page }) => {
  await page.goto("/tables");

  const table1 = page.locator("#table1");
  const rows = table1.locator("tbody tr");

  let persons = [];
  for (let i = 0; i < (await rows.count()); i++) {
    const row = rows.nth(i);
    const cells = row.locator("td");
    persons.push({
      lastName: cells.nth(0).textContent(),
      firstName: cells.nth(1).textContent(),
      due: cells.nth(3).textContent(),
    });
  }

  // // persons.map((person) => {
  // //   person.due = parseFloat(person.due.replace("$", ""));
  // // });
  // persons.map((person) => {
  //   person.due = parseFloat(person.due.replace("$", ""));
  // });
  // console.log(persons);
});
