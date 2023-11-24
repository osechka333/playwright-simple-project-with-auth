import { defineConfig, devices } from '@playwright/test'
import {config as testConfig} from "./config/config.js";
import {STORAGE_STATE_USER_PATH} from "./src/data/storageState.js";

const config =  defineConfig({
  // testDir: './tests',
  testMatch: 'tests/**/*.spec.js',
  globalSetup: './globalSetup',
  timeout: 360_000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 2,
  use: {
    headless: false,
    httpCredentials: testConfig.httpCredentials,
    baseURL: testConfig.baseURL,
    viewport: {
      width: 1200,
      height: 840
    },
    trace: 'retain-on-failure',
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    launchOptions:{
    }
  },
  projects: [
    {
      name: 'setup',
      testMatch: '**/setup/**/*.setup.js',
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup'],
      testIgnore: 'tests/api/**/*.spec.js',
    }
  ],
});

export default config
