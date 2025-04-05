// Activity status types
export type ActivityStatus = "in-progress" | "pending" | "completed";

// Option interface
export interface Option {
  id: number;
  text: string;
  isCorrect?: boolean;
}

// Question interface
export interface Question {
  id: number;
  text: string;
  options: Option[];
  selectedOption?: number;
  isCorrect?: boolean;
}

// Activity interface for detailed view
export interface Activity {
  id: number;
  title: string;
  subject: string;
  class: string;
  studentName: string;
  questions: Question[];
  grade?: number;
  status: ActivityStatus;
  childId?: number;
  dueDate?: string;
}

// Simplified activity interface for list views
export interface ActivityListItem {
  id: number;
  title: string;
  subject: string;
  class: string;
  dueDate?: string;
  grade?: number;
  childId?: number;
  status?: ActivityStatus;
}

// Child interface for parent view
export interface Child {
  id: number;
  name: string;
  class: string;
}
