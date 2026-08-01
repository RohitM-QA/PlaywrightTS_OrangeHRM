import { UserRole, UserStatus } from './User';

export interface UserSearch {

    username?: string;
    userRole?: UserRole;
    employeeName?: string;
    status?: UserStatus;

}