import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ActivityLogState {
  activities: string[];
}

const initialState: ActivityLogState = {
  activities: [],
};

const activityLogSlice = createSlice({
  name: 'activityLog',
  initialState,
  reducers: {
    addActivity: (state, action: PayloadAction<string>) => {
      state.activities.unshift(action.payload);
    },
    clearActivities: (state) => {
      state.activities = [];
    },
  },
});

export const { addActivity, clearActivities } = activityLogSlice.actions;
export default activityLogSlice.reducer; 