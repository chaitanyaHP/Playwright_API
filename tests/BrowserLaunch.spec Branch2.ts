import { test, expect } from '@playwright/test';

test('Open saucedemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  console.log('Branch SauceDemo page opened successfully');
  console.log('Branch new changes SauceDemo page title:', await page.title());
  console.log('Branch new changes SauceDemo page URL:', page.url());
  console.log('Changes in master 1');
   console.log('Changes in master for stash');
});


