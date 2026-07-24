declare namespace NodeJS {
  interface ProcessEnv {
    BASE_URL: string;

    USERNAME: string;

    PASSWORD: string;

    HEADLESS: string;

    BROWSER: string;

    SLOW_MO: string;

    DEFAULT_TIMEOUT: string;

    EXPECT_TIMEOUT: string;

    SCREENSHOT: string;

    VIDEO: string;

    TRACE: string;
  }
}