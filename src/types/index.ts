// Common types used throughout the application

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface MenuItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
