import { Page, Locator } from "@playwright/test";

export class WebTablePage {
  readonly page: Page;
  readonly table1: Locator;
  readonly rows: Locator;

  constructor(page: Page) {
    this.page = page;
    this.table1 = page.locator("#table1");
    this.rows = this.table1.locator("tbody tr");
  }
  async goto() {
    await this.page.goto("/tables");
  }

  async getPersons(persons): Promise<any[]> {
    // const persons = [];
    for (let i = 0; i < (await this.rows.count()); i++) {
      const row = this.rows.nth(i);
      const cells = await row.locator("td");
      persons.push({
        lastName: await cells.nth(0).textContent(),
        firstName: await cells.nth(1).textContent(),
        due: await cells.nth(3).textContent(),
      });
    }

    persons.map((person) => {
      person.due = parseFloat(person.due.replace("$", ""));
    });
    return persons;
  }
  async getMaxDueValue(persons: Array<any>): Promise<number> {
    return Math.max(...persons.map((person) => person.due));
  }
  async getMaxDueListPerson(
    persons: Array<any>,
    maxDueValue: number
  ): Promise<Array<any>> {
    return persons
      .filter((person) => person.due === maxDueValue)
      .map((person) => `${person.firstName} ${person.lastName}`);
  }

  async getMinDueValue(persons: Array<any>): Promise<number> {
    return Math.min(...persons.map((person) => person.due));
  }
  async getMinDueListPerson(
    persons: Array<any>,
    minDueValue: number
  ): Promise<Array<any>> {
    return persons
      .filter((person) => person.due === minDueValue)
      .map((person) => `${person.firstName} ${person.lastName}`);
  }
}
