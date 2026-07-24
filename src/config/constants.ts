export const APP_NAME = 'OrangeHRM';

export const DEFAULT_TIMEOUT = 30_000;

export const EXPECT_TIMEOUT = 10_000;

export const VIEWPORT = {
  width: 1920,
  height: 1080,
};

export const USERS = {
  ADMIN: 'Admin',
};

export const ROUTES = {
  LOGIN: '/auth/login',
  DASHBOARD: '/dashboard/index',
  ADMIN: '/admin/viewSystemUsers',
  PIM: '/pim/viewEmployeeList',
  LEAVE: '/leave/viewLeaveList',
  TIME: '/time/viewEmployeeTimesheet',
  RECRUITMENT: '/recruitment/viewCandidates',
  MY_INFO: '/pim/viewPersonalDetails/empNumber/7',
  PERFORMANCE: '/performance/searchEvaluatePerformanceReview',
  DIRECTORY: '/directory/viewDirectory',
  MAINTENANCE: '/maintenance/purgeEmployee',
  BUZZ: '/buzz/viewBuzz',
};

export const BROWSERS = {
  CHROMIUM: 'chromium',
  FIREFOX: 'firefox',
  WEBKIT: 'webkit',
  EDGE: 'msedge',
} as const;