import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});

function getEnv(name: string, defaultValue?: string): string {
  const value = process.env[name] ?? defaultValue;

  if (value === undefined) {
    throw new Error(`Environment variable "${name}" is not defined.`);
  }

  return value;
}

export const env = {
  app: {
    baseUrl: getEnv('BASE_URL'),
  },

  auth: {
    username: getEnv('USERNAME'),
    password: getEnv('PASSWORD'),
  },

  browser: {
    name: getEnv('BROWSER', 'chromium'),
    headless: getEnv('HEADLESS', 'false') === 'true',
    slowMo: Number(getEnv('SLOW_MO', '0')),
  },

  timeout: {
    default: Number(getEnv('DEFAULT_TIMEOUT', '30000')),
    expect: Number(getEnv('EXPECT_TIMEOUT', '10000')),
  },

  artifact: {
    screenshot: getEnv('SCREENSHOT', 'only-on-failure'),
    video: getEnv('VIDEO', 'retain-on-failure'),
    trace: getEnv('TRACE', 'retain-on-failure'),
  },
} as const;