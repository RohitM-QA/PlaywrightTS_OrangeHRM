import type { BrowserContextOptions } from '@playwright/test';

import { env } from './env';
import { VIEWPORT } from './constants';

export const browserContextOptions: BrowserContextOptions = {
  viewport: VIEWPORT,

  ignoreHTTPSErrors: true,

  acceptDownloads: true,

  baseURL: env.app.baseUrl,
};

export const launchOptions = {
  headless: env.browser.headless,

  slowMo: env.browser.slowMo,
};