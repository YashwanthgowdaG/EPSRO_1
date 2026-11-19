
import { Page } from '@playwright/test';
import path from 'path';
import fs from 'fs';

export async function takeScreenshot(
    page: Page,
    screenshotName: string
): Promise<string> {

    const screenshotDir = path.join(
        process.cwd(),
        'screenshots'
    );

    // Create folder if it does not exist
    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
    }

    // Generate screenshot file path
    const screenshotPath = path.join(
        screenshotDir,
        `${screenshotName}.png`
    );

    // Take screenshot
    await page.screenshot({
        path: screenshotPath,
        fullPage: true
    });

    console.log(`Screenshot saved: ${screenshotPath}`);

    return screenshotPath;
}
