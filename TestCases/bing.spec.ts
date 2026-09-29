import { test, expect } from '@playwright/test';

test('verify Bing title', async ({ page }) => {
  await page.goto('https://www.bing.com');

  await expect(page).toHaveTitle('Search - Microsoft Bing');
});
