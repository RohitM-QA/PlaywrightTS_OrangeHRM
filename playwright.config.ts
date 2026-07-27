import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

// Load environment variables
dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

const isCI = Boolean(process.env.CI);

export default defineConfig({
  //---------------------------------------------------------
  // Test Directory
  //---------------------------------------------------------
  testDir: "./tests",

  testMatch: ["**/*.spec.ts"],

  testIgnore: [
    "**/node_modules/**",
    "**/dist/**",
    "**/test-results/**",
    "**/playwright-report/**"
  ],

  //---------------------------------------------------------
  // Timeouts
  //---------------------------------------------------------
  timeout: 60 * 1000,

  globalTimeout: 60 * 60 * 1000,

  expect: {
    timeout: 10 * 1000,
  },

  //---------------------------------------------------------
  // Execution
  //---------------------------------------------------------
  fullyParallel: true,

  forbidOnly: isCI,

  retries: isCI ? 2 : 0,

  workers: isCI ? 2 : undefined,

  //---------------------------------------------------------
  // Reporter
  //---------------------------------------------------------
  reporter: [
    [
      "html",
      {
        outputFolder: "playwright-report",
        open: "never",
      },
    ],

    ["list"],

    [
      "json",
      {
        outputFile: "test-results/results.json",
      },
    ],

    [
      "junit",
      {
        outputFile: "test-results/results.xml",
      },
    ],

    ["allure-playwright"],
  ],

  //---------------------------------------------------------
  // Output
  //---------------------------------------------------------
  outputDir: "test-results",

  preserveOutput: "failures-only",

  snapshotPathTemplate:
    "{testDir}/{testFilePath}-snapshots/{arg}{ext}",

  //---------------------------------------------------------
  // Shared Settings
  //---------------------------------------------------------
  use: {
    //-----------------------------------------------------
    // Application
    //-----------------------------------------------------
    baseURL:
      process.env.BASE_URL ??
      "https://opensource-demo.orangehrmlive.com",

    //-----------------------------------------------------
    // Browser
    //-----------------------------------------------------
    browserName: "chromium",

    headless: process.env.HEADLESS === "true",

    channel: process.env.BROWSER_CHANNEL || undefined,

    //-----------------------------------------------------
    // Viewport
    //-----------------------------------------------------
    viewport: {
      width: 1920,
      height: 1080,
    },

    //-----------------------------------------------------
    // Timeouts
    //-----------------------------------------------------
    actionTimeout: 15 * 1000,

    navigationTimeout: 30 * 1000,

    //-----------------------------------------------------
    // Browser Context
    //-----------------------------------------------------
    ignoreHTTPSErrors: true,

    acceptDownloads: true,

    bypassCSP: false,

    //-----------------------------------------------------
    // Artifacts
    //-----------------------------------------------------
    screenshot: "only-on-failure",

    video: "retain-on-failure",

    trace: "retain-on-failure",

    //-----------------------------------------------------
    // Locale
    //-----------------------------------------------------
    locale: "en-US",

    timezoneId: "UTC",

    //-----------------------------------------------------
    // Launch Options
    //-----------------------------------------------------
    launchOptions: {
      slowMo: Number(process.env.SLOW_MO ?? 0),
      args: [
        "--start-maximized",
      ],
    },
  },

  //---------------------------------------------------------
  // Projects
  //---------------------------------------------------------
  projects: [
    {
      name: "Chromium",

      use: {
        ...devices["Desktop Chrome"],
      },
    },

    {
      name: "Firefox",

      use: {
        ...devices["Desktop Firefox"],
      },
    },

    {
      name: "WebKit",

      use: {
        ...devices["Desktop Safari"],
      },
    },

    {
      name: "Microsoft Edge",

      use: {
        ...devices["Desktop Edge"],
        channel: "msedge",
      },
    },
  ],

  //---------------------------------------------------------
  // Web Server
  //---------------------------------------------------------
  /*
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !isCI,
    timeout: 120 * 1000,
  },
  */

  //---------------------------------------------------------
  // Metadata
  //---------------------------------------------------------
  metadata: {
    Project: "Playwright Automation Framework",
    Environment: process.env.ENV ?? "QA",
    Browser: process.env.BROWSER ?? "Chromium",
    ExecutedBy: process.env.USER ?? "Local",
  },
});