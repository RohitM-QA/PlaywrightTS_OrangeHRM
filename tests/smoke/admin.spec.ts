import { test, expect } from '@core/BaseTest';

import { UserRole, UserStatus } from '@models/User';
import adminUsers from '@data/adminUsers.json';
import { AdminPage } from '@pages/AdminPage';

test.describe('Admin Module - Smoke Tests', () => {

    test.beforeEach(async ({ adminPage }) => {
        await adminPage.goto();
    });

    test('TC_001 - Should open Admin page successfully', {
    tag: ['@smoke', '@admin']
}, async ({ adminPage }) => {

    await adminPage.verifyLoaded();

});


});

