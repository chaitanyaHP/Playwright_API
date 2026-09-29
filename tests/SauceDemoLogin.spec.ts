
import { test, expect } from '@playwright/test';

test('Login to Open saucedemo', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.pause();await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="login-button"]').click();
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();


  console.log('Changes in master for rebase check');
});
