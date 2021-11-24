import { createSlice } from "@reduxjs/toolkit";

const remainingTasksSlice = createSlice({
  name: "remainingTasks",
  initialState: 0,
  reducers: {
    updateRemainingTasks: (state, action) => {
      return action.payload;
    },
  },
});

// Selector
export const selectRemainingTasksSlice = (state) => state.remainingTasks;

// Actions
export const { updateRemainingTasks } = remainingTasksSlice.actions;

// Redeucer
export default remainingTasksSlice.reducer;
