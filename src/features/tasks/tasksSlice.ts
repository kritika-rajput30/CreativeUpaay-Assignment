import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Task, TaskPriority, TaskState } from './types';

const initialState: TaskState = {
  tasksBySection: {
    todo: [],
    inprogress: [],
    done: [],
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{ section: string; task: Task }>
    ) => {
      state.tasksBySection[action.payload.section].push(action.payload.task);
    },
    moveTask: (
      state,
      action: PayloadAction<{
        sourceSection: string;
        destSection: string;
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
    },
    setTasks: (state, action: PayloadAction<TaskState['tasksBySection']>) => {
      state.tasksBySection = action.payload;
    },
  },
});

export const { addTask, moveTask, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer; 