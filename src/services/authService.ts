import { User, UserRole, mockUsers } from '../contexts/UserContext';

// Mock user credentials
interface UserCredentials {
  username: string;
  password: string;
  role: UserRole;
  userId: string;
}

// Mock user database
const userCredentials: UserCredentials[] = [
  {
    username: 'professor',
    password: '123456',
    role: 'teacher',
    userId: '1',
  },
  {
    username: 'aluno',
    password: '123456',
    role: 'student',
    userId: '2',
  },
  {
    username: 'responsavel',
    password: '123456',
    role: 'parent',
    userId: '3',
  },
];

// Mock authentication service
export const authService = {
  /**
   * Authenticate a user with username and password
   * @param username The username
   * @param password The password
   * @returns A promise that resolves to the user if authentication is successful, or rejects with an error
   */
  login: (username: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      // Simulate API call delay
      setTimeout(() => {
        const userCred = userCredentials.find(
          (u) => u.username === username && u.password === password
        );

        if (userCred) {
          // Get the corresponding mock user
          const user = 
            userCred.role === 'teacher' ? mockUsers.teacher :
            userCred.role === 'student' ? mockUsers.student :
            mockUsers.parent;
          
          resolve(user);
        } else {
          reject(new Error('Credenciais inválidas. Tente novamente.'));
        }
      }, 800); // Simulate network delay
    });
  },

  /**
   * Log out the current user
   * @returns A promise that resolves when the user is logged out
   */
  logout: (): Promise<void> => {
    return new Promise((resolve) => {
      // Simulate API call delay
      setTimeout(() => {
        resolve();
      }, 300);
    });
  },

  /**
   * Check if the user is authenticated
   * @returns A boolean indicating if the user is authenticated
   */
  isAuthenticated: (): boolean => {
    // In a real app, this would check for a valid token in localStorage or cookies
    return false;
  },
};
