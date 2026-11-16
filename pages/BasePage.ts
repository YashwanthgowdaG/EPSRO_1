import { Page, Locator } from '@playwright/test';

export class BasePage {

    constructor(protected page: Page) {}

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async clickElement(locator: Locator) {
        await locator.click();
    }

    async enterText(locator: Locator, value: string) {
        await locator.fill(value);
    }
}