import { Given, When, Then} from "@cucumber/cucumber";
import { Page, Browser, chromium, expect } from "@playwright/test";
import PrivacyPage from '../features/pageobjects/PrivacyPage';
import TablePage from "../features/pageobjects/TablePage";

let browser: Browser;
let page: Page;

  Given('a user goes to Jdwetherspoon site and excepts Privacy Terms', async function () {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    const privacypage = new PrivacyPage(page)
    await page.goto("https://order.jdwetherspoon.com/venue/jdw/95/tables")
    await expect(page).toHaveTitle(/Policies permissions | Wetherspoon/);
    await privacypage.checkTerms(true)
    await privacypage.checkPolicy(true)
    await privacypage.proceed()
    await expect(page).toHaveTitle(/Choose table - The Moon Under Water, Watford | Wetherspoon/);
  });


When('the user enters their {string}', async function (tablenumber: string) {
    const tablepage = new TablePage(page)
    tablepage.enterTableNumber(tablenumber);
    tablepage.continue();
  }); 


  Then('the menu page will be displayed', async function () {
    await expect(page).toHaveURL('https://order.jdwetherspoon.com/venue/jdw/95/tables/69/menus');
  });
 