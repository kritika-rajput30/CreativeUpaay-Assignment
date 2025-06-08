import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Task, TaskPriority, TaskState } from '../../utils/types';

// Load initial state from localStorage or use default
const loadInitialState = (): TaskState => {
  const savedState = localStorage.getItem('tasks');
  if (savedState) {
    return JSON.parse(savedState);
  }
  return {
    tasksBySection: {
      todo: [],
      inprogress: [],
      done: [],
    },
  };
};

const initialState: TaskState = loadInitialState();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{ section: keyof TaskState['tasksBySection']; task: Task }>
    ) => {
      state.tasksBySection[action.payload.section].push(action.payload.task);
      // Save to localStorage
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    moveTask: (
      state,
      action: PayloadAction<{
        sourceSection: keyof TaskState['tasksBySection'];
        destSection: keyof TaskState['tasksBySection'];
        sourceIndex: number;
        destIndex: number;
      }>
    ) => {
      const [moved] = state.tasksBySection[action.payload.sourceSection].splice(
        action.payload.sourceIndex,
        1
      );
      state.tasksBySection[action.payload.destSection].splice(
        action.payload.destIndex,
        0,
        moved
      );
      // Save to localStorage
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    setTasks: (state, action: PayloadAction<TaskState['tasksBySection']>) => {
      state.tasksBySection = action.payload;
      // Save to localStorage
      localStorage.setItem('tasks', JSON.stringify(state));
    },
  },
});

export const { addTask, moveTask, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer; 