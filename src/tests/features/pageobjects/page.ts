  import { Page, Browser, chromium, expect } from "@playwright/test";

  let browser: Browser;
  let page: Page;


/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens jdwetherspoon site
    * 
    */
    public open () {
        browser = await chromium.launch({headless: false});
        page = await browser.newPage();
        return page.url(`https://order.jdwetherspoon.com/venue/jdw/95/tables`)
  
    }
}
