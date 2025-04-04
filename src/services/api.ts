import { ApiResponse } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Generic API client for making HTTP requests
 */
export const apiClient = {
  /**
   * Make a GET request
   */
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const data = await response.json();
      
      return {
        data,
        status: response.status,
        message: response.statusText,
      };
    } catch (error) {
      console.error('API GET Error:', error);
      throw error;
    }
  },
  
  /**
   * Make a POST request
   */
  async post<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      
      const data = await response.json();
      
      return {
        data,
        status: response.status,
        message: response.statusText,
      };
    } catch (error) {
      console.error('API POST Error:', error);
      throw error;
    }
  },
  
  /**
   * Make a PUT request
   */
  async put<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      
      const data = await response.json();
      
      return {
        data,
        status: response.status,
        message: response.statusText,
      };
    } catch (error) {
      console.error('API PUT Error:', error);
      throw error;
    }
  },
  
  /**
   * Make a DELETE request
   */
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const data = await response.json();
      
      return {
        data,
        status: response.status,
        message: response.statusText,
      };
    } catch (error) {
      console.error('API DELETE Error:', error);
      throw error;
    }
  },
};
