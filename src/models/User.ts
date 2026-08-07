export enum UserRole {
    ADMIN = 'Admin',
    ESS = 'ESS'
}

export enum UserStatus {
    ENABLED = 'Enabled',
    DISABLED = 'Disabled'
}

export interface User {
    userRole: string;
    employeeName: string;
    username: string;
    status: string;
    password: string;
}