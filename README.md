# Playwright Automation Framework

## 1. Project Overview

This project is an end-to-end UI automation framework developed using:

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- Playwright Fixtures
- JSON Test Data
- Excel Test Data
- Environment Variables (.env)
- HTML Reporting
- Screenshot and Video Recording

The framework automates the login functionality of the CHRIST University ESPro ERP application.

## 2. Project Folder Structure

```text
ESPRO_1
│
├── pages
│   ├── BasePage.ts
│   └── LoginPage.ts
│
├── fixtures
│   └── baseFixture.ts
│
├── test-data
│   ├── loginData.json
│   └── loginData.xlsx
│
├── utils
│   ├── dataResolver.ts
│   └── ExcelReader.ts
│
├── tests
│   ├── login-json.spec.ts
│   └── login-excel.spec.ts
│
├── playwright.config.ts
├── tsconfig.json
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 3. Explanation of Each Folder and File

### A. pages – Page Object Model

This folder contains page classes and web element locators.

**BasePage.ts**

- Contains common reusable methods.
- Handles browser navigation.
- Handles clicking elements.
- Handles entering text.
- Avoids repeating common code.

**LoginPage.ts**

- Contains login page locators.
- Identifies username field.
- Identifies password field.
- Identifies Sign In button.
- Contains login functionality.
- Inherits common methods from BasePage.

### B. fixtures – Test Setup

**baseFixture.ts**

- Creates custom Playwright fixtures.
- Initializes the LoginPage object.
- Makes the LoginPage available directly inside test cases.
- Reduces repeated object creation in test files.

### C. test-data – Test Data Management

**loginData.json**

Stores test data in JSON format.

Example test scenarios:
- Valid Login
- Invalid Password
- Empty Password

**loginData.xlsx**

Stores test data in Excel format.

The worksheet name used by the framework is `Login Data`.

Excel contains:
- Test Name
- Username
- Password
- Expected Result

### D. utils – Reusable Utilities

**ExcelReader.ts**

- Reads Excel files using the XLSX package.
- Opens the specified worksheet.
- Converts Excel rows into JavaScript objects.
- Returns test data to the test file.

**dataResolver.ts**

- Reads placeholders from JSON test data.
- Replaces `${ERP_USERNAME}` with the username from `.env`.
- Replaces `${ERP_PASSWORD}` with the password from `.env`.

### E. tests – Test Cases

**login-json.spec.ts**

- Reads test data from JSON.
- Uses dataResolver to resolve environment variables.
- Executes login scenarios.
- Checks login page elements.
- Submits login credentials.

**login-excel.spec.ts**

- Reads test data from Excel.
- Uses ExcelReader to load test scenarios.
- Executes login scenarios using the same LoginPage.
- Avoids duplicating page interaction logic.

### F. playwright.config.ts – Framework Configuration

This file controls Playwright execution.

Configuration includes:

- Test directory.
- Browser selection.
- Headed or headless execution.
- Base URL.
- Parallel execution.
- Retry settings.
- HTML reporting.
- Screenshot capture.
- Video recording.
- Trace recording.

### G. .env – Environment Configuration

Stores environment-specific values:

- ERP application URL.
- Username.
- Password.

Credentials should not be committed to GitHub.

### H. tsconfig.json – TypeScript Configuration

Controls TypeScript compilation settings.

Includes:
- Strict type checking.
- Module configuration.
- Node.js types.
- JSON module support.

### I. package.json – Project Dependencies

Contains:
- Project details.
- Playwright dependencies.
- XLSX package.
- Dotenv package.
- Project scripts.

## 4. Framework Execution Flow

The framework works in this sequence:

```text
Test Execution
      |
      v
Playwright Config
      |
      v
Test File
      |
      v
Read JSON / Excel Data
      |
      v
Resolve Environment Variables
      |
      v
Fixture Initializes LoginPage
      |
      v
LoginPage
      |
      v
BasePage Methods
      |
      v
Browser Interaction
      |
      v
Test Execution Result
      |
      v
HTML Report / Screenshots / Videos
```

## 5. Page Object Model (POM)

POM is a design pattern used to separate page locators and page actions from test cases.

Benefits:
- Code reusability.
- Easy maintenance.
- Less code duplication.
- Better test organization.

Example:

LoginPage contains username, password and login button locators.

The test file calls the login method instead of writing locator interactions repeatedly.

## 6. Data-Driven Testing

This framework supports two test data sources.

**JSON Data-Driven Testing**

Reads multiple test scenarios from loginData.json.

**Excel Data-Driven Testing**

Reads multiple test scenarios from loginData.xlsx.

Both approaches use the same LoginPage, so the same login functionality can be tested with different datasets.

## 7. Reporting and Failure Evidence

The framework uses Playwright HTML Reporter.

It supports:

- Passed test cases.
- Failed test cases.
- Error messages.
- Screenshots on failure.
- Videos retained on failure.
- Trace recording on the first retry.

Test results are stored in:

```text
test-results/
playwright-report/
```

## 8. Installation and Execution Commands

Install project dependencies:

```bash
npm install
```

Install Excel package if required:

```bash
npm install xlsx
```

Install Playwright browsers:

```bash
npx playwright install
```

Run JSON tests:

```bash
npx playwright test tests/login-json.spec.ts --headed
```

Run Excel tests:

```bash
npx playwright test tests/login-excel.spec.ts --headed
```

Run all tests:

```bash
npx playwright test
```

Run tests in headless mode:

```bash
npx playwright test
```

Open HTML report:

```bash
npx playwright show-report
```

## 9. Advantages of This Framework

1. Reusable Page Object Model.
2. Centralized browser configuration.
3. Reusable fixtures.
4. Supports JSON and Excel test data.
5. Environment-based configuration.
6. Screenshot and video capture.
7. HTML reporting.
8. Easy maintenance and scalability.

## 10. Future Enhancements

- Add actual login success and failure assertions.
- Add logout scenarios.
- Add dashboard page objects.
- Add API testing.
- Integrate with GitHub Actions.
- Add cross-browser testing.
- Add reusable test hooks.
- Add CI/CD execution.

## Conclusion

This framework provides a structured and reusable approach to UI automation using Playwright and TypeScript.

It separates test logic, page objects, test data, reusable utilities and configuration, making the framework easier to maintain and extend.