import { test, expect } from '@playwright/test';

test('Open saucedemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
});


