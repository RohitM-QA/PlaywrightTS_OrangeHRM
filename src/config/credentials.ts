export interface UserCredential {
  username: string;
  password: string;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  ESS = 'ESS',
  HR_MANAGER = 'HR_MANAGER',
  RECRUITMENT_MANAGER = 'RECRUITMENT_MANAGER',
  PERFORMANCE_MANAGER = 'PERFORMANCE_MANAGER',
}

const credentials: Record<UserRole, UserCredential> = {
  [UserRole.ADMIN]: {
    username: 'Admin',
    password: 'admin123',
  },

  // Sample users (replace with real users in your environment)
  [UserRole.ESS]: {
    username: 'ESS_User',
    password: 'Password123',
  },

  [UserRole.HR_MANAGER]: {
    username: 'HR_Manager',
    password: 'Password123',
  },

  [UserRole.RECRUITMENT_MANAGER]: {
    username: 'Recruitment_Manager',
    password: 'Password123',
  },

  [UserRole.PERFORMANCE_MANAGER]: {
    username: 'Performance_Manager',
    password: 'Password123',
  },
};

export class CredentialManager {
  static get(role: UserRole): UserCredential {
    const credential = credentials[role];

    if (!credential) {
      throw new Error(`No credentials configured for role: ${role}`);
    }

    return credential;
  }

  static getAll(): Record<UserRole, UserCredential> {
    return credentials;
  }
}