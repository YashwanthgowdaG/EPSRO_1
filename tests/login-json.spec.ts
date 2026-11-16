
import { expect, test } from '../fixtures/baseFixture';
import loginData from '../test-data/loginData.json';
import { resolveEnvTokens } from '../utils/dataResolver';

for (const data of loginData) {
    test(data.testName, async ({ loginPage }) => {

        const testData = resolveEnvTokens(data);

        // Check test data
        if (!testData.username) {
            throw new Error('Username is missing in test data');
        }

        // Open login page
        await loginPage.openLoginPage();

        // Verify login fields
        await expect(loginPage.username).toBeVisible();
        await expect(loginPage.password).toBeVisible();
        await expect(loginPage.loginButton).toBeVisible();

        // Enter credentials and sign in
        await loginPage.login(
            testData.username,
            testData.password
        );

        // Print test details
        console.log(`Test Name: ${testData.testName}`);
        console.log(`Expected Result: ${testData.expectedResult}`);

    });
}
