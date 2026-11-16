import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {

        super(page);

        this.username = page.locator(
            'input[name="data:loginId"]'
        );

        this.password = page.locator(
            'input[name="data:loginPassword"]'
        );

        this.loginButton = page.locator(
            'button.login-button'
        );
    }

    async openLoginPage() {
        await this.navigateTo('./');//./ resolves relative to your configured ERP base URL, keeping the /ERP/ path.
    }

    async login(username: string, password: string) {

        await this.enterText(this.username, username);

        await this.enterText(this.password, password);

        await this.clickElement(this.loginButton);
    }
}