import { test, expect } from '@playwright/test';

//Using beforeEach de gom cac step chung trong cac test case lai voi nhau
const persons = [];

test.beforeEach(async({page})=>{

await page.goto('/tables');

    const table1 = await page.locator('#table1');
    const rows = await table1.locator('tbody tr');

    for (let i = 0; i < await rows.count(); i++)
    {
        const row = rows.nth(i);
        const cells = await row.locator('td');
        persons.push({
            lastName: await cells.nth(0).textContent(),
            firstName: await cells.nth(1).textContent(),
            due: await cells.nth(3).textContent()
        });
    } 
 
    persons.map(person =>{
        person.due = parseFloat(person.due.replace('$',''));
    })

})

test('verify max due value is Jason Doe', async({page})=>{

    const maxDueValue = Math.max(...persons.map(person => person.due));
  
    const maxDueListPerson = persons
                                .filter(person => person.due === maxDueValue)
                                .map(person => `${person.firstName} ${person.lastName}`);

    expect(maxDueListPerson).toEqual(['Jason Doe']);
    
});

test('verify min due value are John Smith and Tim Conway', async({page})=>{

    const minDueValue = Math.min(...persons.map(person => person.due));
    
    const minDueListPerson = persons
                                .filter(person => person.due === minDueValue)
                                .map(person => `${person.firstName} ${person.lastName}`);
    
    expect(minDueListPerson).toEqual(['John Smith','Tim Conway']);
    
});