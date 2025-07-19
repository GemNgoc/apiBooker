import { test, expect } from "@playwright/test";

//Using beforeEach de gom cac step chung trong cac test case lai voi nhau
type Person = {
  lastName: string | null;
  firstName: string | null;
  due: number;
};

//Copilot: Declares a constant variable named persons,
//which is an empty array that will only contain objects of type Person.
const persons: Person[] = [];

test.beforeEach(async ({ page }) => {
  await page.goto("/tables");
  const table1 = page.locator("#table1");
  const rows = table1.locator("tbody tr");

  for (let i = 0; i < (await rows.count()); i++) {
    const row = rows.nth(i);
    const cells = row.locator("td");
    const lastName = (await cells.nth(0).textContent()) ?? "";
    const firstName = (await cells.nth(1).textContent()) ?? "";
    const dueStr = (await cells.nth(3).textContent()) ?? "";
    const due = parseFloat(dueStr.replace("$", ""));
    persons.push({
      lastName,
      firstName,
      due,
    });
  }
});

test("verify max due value is Jason Doe", async ({ page }) => {
  const maxDueValue = Math.max(...persons.map((customer) => customer.due));
  const maxDueListPerson = persons
    .filter((customer) => customer.due === maxDueValue)
    .map((customer) => `${customer.firstName} ${customer.lastName}`);
});

test("verify min due value are John Smith and Tim Conway", async ({ page }) => {
  const minDueValue = Math.min(...persons.map((person) => person.due));

  const minDueListPerson = persons
    .filter((person) => person.due === minDueValue)
    .map((person) => `${person.firstName} ${person.lastName}`);

  expect(minDueListPerson).toEqual(["John Smith", "Tim Conway"]);
});
