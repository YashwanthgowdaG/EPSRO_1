
import { test, expect } from '../fixtures/baseFixture';
import { readExcel } from '../utils/ExcelReader';

const excelData = readExcel(
    'test-data/loginData.xlsx',
    'LoginData'
);

for (const data of excelData) {

    const testData = {
        testName: String(data.testName ?? ''),
        username: String(data.username ?? ''),
        password: String(data.password ?? ''),
        expectedResult: String(data.expectedResult ?? '')
    };

    test(testData.testName, async ({ loginPage }) => {

        // Validate Excel data
        if (!testData.username) {
            throw new Error('Username is missing in Excel');
        }

        // Open login page
        await loginPage.openLoginPage();

        // Verify login fields
        await expect(loginPage.username).toBeVisible();
        await expect(loginPage.password).toBeVisible();
        await expect(loginPage.loginButton).toBeVisible();

        // Enter username and password
        await loginPage.login(
            testData.username,
            testData.password
        );

        console.log('Test Name:', testData.testName);
        console.log('Expected Result:', testData.expectedResult);
    });
}
