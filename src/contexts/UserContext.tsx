import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { authService } from "../services/authService";

// Define user roles
export type UserRole = "teacher" | "student" | "parent";

// Define user interface
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

// Define context interface
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<User>;
  logout: () => Promise<void>;
  isTeacher: () => boolean;
  isStudent: () => boolean;
  isParent: () => boolean;
  loading: boolean;
  error: string | null;
}

// Create context with default values
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  login: async () => {
    throw new Error("Not implemented");
  },
  logout: async () => {},
  isTeacher: () => false,
  isStudent: () => false,
  isParent: () => false,
  loading: false,
  error: null,
});

// Create provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const isAuthenticated = !!user;

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = async (username: string, password: string): Promise<User> => {
    setLoading(true);
    setError(null);

    try {
      const userData = await authService.login(username, password);
      setUser(userData);
      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      setLoading(false);
      return userData;
    } catch (err) {
      setLoading(false);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro durante o login.");
      }
      throw err;
    }
  };

  const logout = async (): Promise<void> => {
    setLoading(true);
    try {
      await authService.logout();
      setUser(null);
      // Remove user from localStorage
      localStorage.removeItem("user");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  const isTeacher = () => user?.role === "teacher";
  const isStudent = () => user?.role === "student";
  const isParent = () => user?.role === "parent";

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        login,
        logout,
        isTeacher,
        isStudent,
        isParent,
        loading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Create custom hook for using the context
export const useUser = () => useContext(UserContext);

// Mock users for testing
export const mockUsers = {
  teacher: {
    id: "1",
    name: "Professor Silva",
    email: "professor@escola.com",
    role: "teacher" as UserRole,
  },
  student: {
    id: "2",
    name: "Aluno Santos",
    email: "aluno@escola.com",
    role: "student" as UserRole,
  },
  parent: {
    id: "3",
    name: "Responsável Oliveira",
    email: "responsavel@email.com",
    role: "parent" as UserRole,
  },
};
