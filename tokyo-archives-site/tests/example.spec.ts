import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:3000');
})
test.describe('test suite',  () => {
  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Tokyo Archives/);
  });
  test('contents of homepage are loaded', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Our Events' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact us' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Meet the Team' })).toBeVisible();
  });
  test('title of the team page is shown', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Meet the Team' })).toContain('Meet the Team');
  });
  test('events page is loaded', async ({ page }) => {
    await expect(page.getByRole('img', { name: 'Project 0 Logo' })).toBeVisible();
  });
  test('form page logo is loaded', async ({ page }) => {
    await expect(page.getByRole('img', { name: 'Company Logo' })).toBeVisible();
  });
  test('form page is accessible', async ({ page }) => {
    await expect(page.locator('#name')).toBeEditable();
    await expect(page.locator('#email')).toBeEditable();
    await expect(page.locator('#message')).toBeEditable();
  });
  test('form page can be submitted',async ({page}) => {
    await page.locator('#name').click();
    await page.locator('#name').fill('username');
    await page.locator('#email').click();
    await page.locator('#email').fill('email@email.com');
    await page.locator('#message').click();
    await page.locator('#message').fill('this is a sample message ');
    await page.getByRole('button', { name: 'Submit' }).click();
  })
});

