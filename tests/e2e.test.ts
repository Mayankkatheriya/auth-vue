import { test, expect } from '@playwright/test';

// You may need to adjust the URL based on your development server configuration.
const baseUrl = 'http://localhost:5173/';

test('Login and Logout', async ({ page }) => {
  // Navigate to the login page
  await page.goto(`${baseUrl}/`);

  // Perform login actions (replace with your actual login logic)
  await page.fill('input[name="email"]', 'your@email.com');
  await page.fill('input[name="password"]', 'yourpassword');
  await page.click('button[type="submit"]');

  // Wait for navigation or any async operations
  await page.waitForLoadState();

  // Check if the user is redirected to the dashboard (replace with your actual dashboard URL)
  expect(page.url()).toBe(`${baseUrl}/dashboard`);

  // Perform logout actions (replace with your actual logout logic)
  await page.click('button[data-testid="logoutButton"]');

  // Wait for navigation or any async operations
  await page.waitForLoadState();

  // Check if the user is redirected to the login page after logout
  expect(page.url()).toBe(`${baseUrl}/`);
});
