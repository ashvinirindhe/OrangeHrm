import { test, expect } from '@playwright/test';

test('Verify validation when job title exceeds the maximum length', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Time at Work').click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Operations & Project Management Professional | Strategy, Team Leadership, Process Improvement, Growth');
  await expect(page.getByText('Should not exceed 100')).toBeVisible();

});


test('Save with job title and description(upto 400 char)', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox').nth(1).fill('Manual Test');
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill('sadasdmslmslfkl;askfas;lfk;lskfl;askl;kjjkfjhfbhkbvnbvbvnbvzmsadasdmslmslfkl;askfas;lfk;lskfl;askl;kjjkfjhfbhkbvnbvbvnbvzmsadasdmslmslfkl;askfas;lfk;lskfl;askl;kjjkfjhfbhkbvnbvbvnbvzmsadasdmslmslfkl;askfas;lfk;lskfl;askl;kjjkfjhfbhkbvnbvbvnbvzmsadasdmslmslfkl;askfas;lfk;lskfl;askl;kjjkfjhfbhkbvnbvbvnbvzmsadasdmslmslfkl;askfas;lfk;lskfl;askl;kjjkfjhfbhkbvnbvbvnbvzmsadasdmslmslfkl;ask');
  await page.getByRole('button', { name: 'Save' }).click();
});