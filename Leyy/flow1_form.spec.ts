import { test, expect } from '@playwright/test';

test('verify Bug report form', async ({ page }) => {
  await page.goto('https://lebyy.com/practice/forms.html');
  await expect(page).toHaveTitle('Forms — Lebyy Practice Lab');

  await page.locator('#reporter').fill('QA Learner');
  await page.locator('#severity').selectOption('high');
  await page.locator('#skills').selectOption(['playwright', 'selenium']);
  await page.getByRole('checkbox', { name: 'Chrome' }).check();
  await page.getByRole('checkbox', { name: 'Firefox' }).check();
  await page.getByRole('radio', { name: 'Yes' }).check();
  await page.getByTestId('found-on').fill('2026-08-29');
  await page.getByTestId('summary').fill('Login button not responding on mobile Safari');
  await page.getByTestId('submit-bug').click();

});
