import { Page, Locator } from '@playwright/test';
import { takeScreenshot } from '../utils/ScreenshotUtil';

export class LoginPage  {
     
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {

        this.page = page;

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
        await this.page.goto('./');//./ resolves relative to your configured ERP base URL, keeping the /ERP/ path.
    }

    async login(username: string, password: string) {

        await this.username.fill( username);

        await this.password.fill( password);

        await this.loginButton.click();
        await takeScreenshot(this.page, 'Valid_Login');
        
    }
}