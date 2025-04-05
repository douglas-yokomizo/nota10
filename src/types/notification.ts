// Notification types
export type NotificationType = 'activity' | 'message' | 'alert';

// Notification interface
export interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  date: string;
  read: boolean;
  sender?: string;
  activityId?: number;
  childId?: number;
}
