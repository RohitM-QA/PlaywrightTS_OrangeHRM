import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({
  path: path.resolve(__dirname, '.env'),
});

const isCI = !!process.env.CI;

export default defineConfig({
  //--------------------------------------
  // Test Directory
  //--------------------------------------
  testDir: './tests',

  //--------------------------------------
  // Global Timeout
  //--------------------------------------
  timeout: 60 * 1000,

  //--------------------------------------
  // Assertion Timeout
  //--------------------------------------
  expect: {
    timeout: 10 * 1000,
  },

  //--------------------------------------
  // Run Tests
  //--------------------------------------
  fullyParallel: true,

  //--------------------------------------
  // Prevent accidental .only in CI
  //--------------------------------------
  forbidOnly: isCI,

  //--------------------------------------
  // Retry Failed Tests
  //--------------------------------------
  retries: isCI ? 2 : 0,

  //--------------------------------------
  // Workers
  //--------------------------------------
  workers: isCI ? 2 : undefined,

  //--------------------------------------
  // Reporters
  //--------------------------------------
  reporter: [
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['list'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['allure-playwright']
  ],

  //--------------------------------------
  // Shared Settings
  //--------------------------------------
  use: {
    baseURL: process.env.BASE_URL,

    headless: process.env.HEADLESS === 'true',

    viewport: {
      width: 1920,
      height: 1080,
    },

    actionTimeout: 15 * 1000,

    navigationTimeout: 30 * 1000,

    ignoreHTTPSErrors: true,

    acceptDownloads: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    launchOptions: {
      slowMo: Number(process.env.SLOW_MO) || 0,
    },
  },

  //--------------------------------------
  // Output Folder
  //--------------------------------------
  outputDir: 'test-results/',

  //--------------------------------------
  // Projects
  //--------------------------------------
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    {
      name: 'Microsoft Edge',
      use: {
        channel: 'msedge',
      },
    },
  ],
});