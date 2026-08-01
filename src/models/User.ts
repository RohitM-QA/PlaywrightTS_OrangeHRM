export enum UserRole {
    ADMIN = 'Admin',
    ESS = 'ESS'
}

export enum UserStatus {
    ENABLED = 'Enabled',
    DISABLED = 'Disabled'
}

export interface User {

    userRole: UserRole;
    employeeName: string;
    username: string;
    status: UserStatus;
    password: string;
    confirmPassword?: string;

}