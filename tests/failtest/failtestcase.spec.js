import { test, expect } from '@playwright/test';


test('Verify that the user can successfully edit an existing pay grade', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('My Actions')).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
  await page.locator('div').filter({ hasText: 'Pay Grades Add (7) Records' }).nth(3).click();
  await page.locator('div:nth-child(6) > .oxd-table-row > div:nth-child(4) > .oxd-table-cell-actions > button:nth-child(2)').click();
  await page.locator('form').getByRole('textbox').click();
  await page.locator('form').getByRole('textbox').fill('Grade A1 - Senior');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
  await page.locator('div').filter({ hasText: 'Pay Grades Add (7) Records' }).nth(3).click();
});


test('Verify that the user can successfully add a currency to an existing pay grade', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Time at Work')).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
  await page.getByRole('button').nth(5).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('-- Select --').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('20000');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('80000');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
  await expect(page.getByText('(4) Records Found')).toBeVisible();
});

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
  await page.getByRole('button').nth(5).click();
  await page.getByText('Edit Pay GradeName * Required Cancel Save Currencies Add').click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('-- Select --').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('27000');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('87000');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();
});