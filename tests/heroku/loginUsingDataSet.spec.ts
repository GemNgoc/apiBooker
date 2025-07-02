import { test, expect } from '@playwright/test';

/*
## TC01: Form Authentication : Login successful with valid credentials
1. Open browser
2. Navigate to https://the-internet.herokuapp.com/login
3. Fill in username with tomsmith // wrong Username
4. Fill in the password with SuperSecretPassword! // Wrong Password
5. Click on Login button
6. And the home page is appear
*/

const dataSet = [
    {
        username: 'tomsmith',
        password: 'SuperSecretPassword!',
        expectedURL: 'https://the-internet.herokuapp.com/secure',
        flashMessage: 'You logged into a secure area!'
    },
    {
        username: 'wrongUsername',
        password: 'SuperSecretPassword!',
        expectedURL: 'https://the-internet.herokuapp.com/login',
        flashMessage: 'Your username is invalid!'
    },
    {
        username: 'tomsmith',
        password: 'wrongPassword',
        expectedURL: 'https://the-internet.herokuapp.com/login',
        flashMessage: 'Your password is invalid!'
    }

];

dataSet.forEach(data =>{
    test(`Check login page with username: ${data.username} and password: ${data.password}`, 
    async ({page}) => {

        // Navigate to https://the-internet.herokuapp.com/login
        await page.goto('/login');

        // Gom 3 steps 
        await test.step ('Login steps',async()=>{
            // Fill in username with tomsmith
             await page.getByRole('textbox', { name: "Username" }).fill(data.username);

            // Fill in the password with SuperSecretPassword!
            await page.getByRole('textbox', { name: 'Password' }).fill(data.password);

            //Click on Login button
            // await page.getByRole('button',{name: ' Login'}).click();
            await page.getByRole('button', { name: ' Login' }).click();

        });

        //Verify the landing page
        await test.step('Verify elements',async()=>{
            //Verify the landing page
            await expect(page).toHaveURL(data.expectedURL);
            await expect(page.url()).toBe(data.expectedURL);
            await expect(page.getByText(data.flashMessage)).toBeVisible();
        });

    });
});



