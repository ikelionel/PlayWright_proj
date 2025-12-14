import { Page, Browser, chromium, type Locator, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

export default class TablePage {
    readonly page: Page;
    readonly table_loc: Locator;
    readonly continue_loc: Locator;

    constructor(page: Page) {
        this.page = page;
        this.table_loc = page.getByRole("textbox", { name: "Table number" });
        this.continue_loc = page.getByText('Continue');

    }

    async enterTableNumber(table: string) {
       
        await this.table_loc.scrollIntoViewIfNeeded();
        await this.table_loc.fill(table);
    }

    async continue() {
        await this.continue_loc.click();
    }
}