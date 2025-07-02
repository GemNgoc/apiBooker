import { test, expect } from "@playwright/test";

// ## TC05: Web Table: Validate largest due person from a table
// 1. Open browser
// 2. Navigate to https://the-internet.herokuapp.com/tables
// 3. Focus on table 1
// 4. The person who has largest due is "Doe Jacson"

test("verify max due value is Jason Doe", async ({ page }) => {
  await page.goto("/tables");

  const table1 = await page.locator("#table1");
  const rows = await table1.locator("tbody tr");

  let persons = [];
  // Push info into an array 'persons'
  for (let i = 0; i < (await rows.count()); i++) {
    const row = rows.nth(i);
    const cells = await row.locator("td");
    persons.push({
      lastName: await cells.nth(0).textContent(),
      firstName: await cells.nth(1).textContent(),
      due: await cells.nth(3).textContent(),
    });
  }
  console.log(persons);

  //Thay $ thanh null
  persons.map((person) => {
    person.due = parseFloat(person.due.replace("$", ""));
  });
  console.log(persons);

  //find max due value
  const maxDueValue = Math.max(...persons.map((person) => person.due));
  console.log(maxDueValue);

  //find list of person with max due value
  const maxDueListPerson = persons
    .filter((person) => person.due === maxDueValue)
    .map((person) => `${person.firstName} ${person.lastName}`);
  console.log(maxDueListPerson);

  expect(maxDueListPerson).toEqual(["Jason Doe"]);
});

test("verify min due value are John Smith and Tim Conway", async ({ page }) => {
  await page.goto("/tables");

  const table1 = await page.locator("#table1");
  const rows = await table1.locator("tbody tr");

  let persons = [];
  // Push info into an array 'persons'
  for (let i = 0; i < (await rows.count()); i++) {
    const row = rows.nth(i);
    const cells = await row.locator("td");
    persons.push({
      lastName: await cells.nth(0).textContent(),
      firstName: await cells.nth(1).textContent(),
      due: await cells.nth(3).textContent(),
    });
  }
  console.log(persons);

  //Thay $ thanh null
  persons.map((person) => {
    person.due = parseFloat(person.due.replace("$", ""));
  });
  console.log(persons);

  //find min due value
  const minDueValue = Math.min(...persons.map((person) => person.due));
  console.log(minDueValue);

  //find list of person with min due value
  const minDueListPerson = persons
    .filter((person) => person.due === minDueValue)
    .map((person) => `${person.firstName} ${person.lastName}`);
  console.log(minDueListPerson);

  expect(minDueListPerson).toEqual(["John Smith", "Tim Conway"]);
});
