import { test, expect } from '@playwright/test';

/*
## TC03: DropDown : Select option
1. Open browser
2. Navigate to https://the-internet.herokuapp.com/dropdown
3. Select "option 1"
4. Validate "option 1" is selected
*/

test(`able to select dropdown by CSS`,async({page})=>{

    // Navigate to https://the-internet.herokuapp.com/dropdow
    await page.goto('/dropdown');

    // Select "option 1"
    await page.locator('#dropdown').selectOption({label:"Option 1"});

    // Validate "option 1" is selected
    await expect(page.locator('#dropdown')).toHaveValue('1');

    
    // Tra ve option 0
    await page.locator('#dropdown').selectOption("");
    await expect(page.locator('#dropdown')).toHaveValue('');
});

test ('able to select dropdown by ARIA--Chua lay duoc',async({page})=>{

})


