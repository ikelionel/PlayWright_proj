import { Page, Browser, chromium, type Locator, expect} from "@playwright/test";

let browser: Browser;
let page: Page;


/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class PrivacyPage {
    readonly page: Page;
    readonly terms_condition_loc: Locator;
    readonly privacy_policy_loc: Locator;
    readonly proceed_button_loc: Locator;

    constructor(page: Page) {
        this.page = page;
        this.terms_condition_loc = page.getByRole('checkbox', { name: 'Terms & conditions checkbox' });
        this.privacy_policy_loc = page.getByRole('checkbox', { name: 'Privacy policy checkbox' });
        this.proceed_button_loc = page.getByRole('button', { name: 'Proceed' })
        
    }

    async checkTerms(terms: boolean) {
        const visible = await this.terms_condition_loc.isVisible();
        if (visible) {
            if (terms)
                await this.terms_condition_loc.click();
        }
    }

    async checkPolicy(policy: boolean) {
        const visible = await this.privacy_policy_loc.isVisible();
        if (visible) {
            if (policy)
                await this.privacy_policy_loc.click();
        }
    }
    async proceed() {
        await this.proceed_button_loc.click();
    }
}