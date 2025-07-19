import { test, expect } from "./fixtures/heroku.fixture";

let persons: any[] = [];

test.beforeEach(async ({ webTablePage }) => {
  await webTablePage.goto();
  persons = await webTablePage.getPersons(persons);
});
test("verify max due value is Jason Doe", async ({ webTablePage }) => {
  const maxDueValue = await webTablePage.getMaxDueValue(persons);
  const maxDueListPerson = await webTablePage.getMaxDueListPerson(
    persons,
    maxDueValue
  );
  expect(maxDueListPerson).toEqual(["Jason Doe"]);
});

test("verify min due value are John Smith and Tim Conway", async ({
  webTablePage,
}) => {
  const minDueValue = await webTablePage.getMinDueValue(persons);
  const minDueListPerson = await webTablePage.getMaxDueListPerson(
    persons,
    minDueValue
  );
  expect(minDueListPerson).toEqual(["John Smith", "Tim Conway"]);
});
