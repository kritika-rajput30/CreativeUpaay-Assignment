import { STATUS } from '../../constants';

export type TaskPriority = 'Low' | 'High' | 'Completed';

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  dueDate?: string; // ISO string format
  subtasks?: Subtask[];
  tags?: string[];
  labels?: string[];
}

export interface TaskState {
  tasksBySection: {
    [K in keyof typeof STATUS]: Task[];
  };
} 