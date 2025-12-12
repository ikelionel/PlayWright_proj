import { Given, When, Then} from "@cucumber/cucumber";
import { Page, Browser, chromium, expect } from "@playwright/test";

  let browser: Browser;
  let page: Page;


  Given('a user goes to Jdwetherspoon site and excepts Privacy Terms', async function () {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    await page.goto('https://order.jdwetherspoon.com/venue/jdw/95/tables');
    await expect(page).toHaveTitle(/Policies permissions | Wetherspoon/);

    const visible = await page.getByRole('checkbox', { name: 'Terms & conditions checkbox' }).isVisible();
    if (visible) { 
        await page.getByRole('checkbox', { name: 'Terms & conditions checkbox' }).click();
        await page.getByRole('checkbox', { name: 'Privacy policy checkbox' }).click();
        await page.getByRole('button', { name: 'Proceed' }).click();
     }

     await expect(page).toHaveTitle(/Choose table - The Moon Under Water, Watford | Wetherspoon/);
  });




  When('the user enters their {string}', async function (tablenumber: string) {
    const table = page.getByRole("textbox", {name: "Table number"});
     await table.scrollIntoViewIfNeeded();
     await table.fill(tablenumber);
     await page.getByText('Continue').click();
  }); 


  Then('the menu page will be displayed', async function () {
    await expect(page).toHaveURL('https://order.jdwetherspoon.com/venue/jdw/95/tables/69/menus');
  });
 