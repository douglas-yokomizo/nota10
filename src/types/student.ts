// Student progress status types
export type StudentProgressStatus = 'pending' | 'in-progress' | 'completed';

// Student progress interface
export interface StudentProgress {
  id: number;
  name: string;
  status: StudentProgressStatus;
  notified: boolean;
  checked: boolean;
}
