import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: "",
  reducers: {
    setInput: (state, action) => {
      return action.payload;
    },
    clearInput: (state, action) => {
      return action.payload;
    },
  },
});

// Selector
export const selectInputSlice = (state) => state.input;

// Actions
export const { setInput, clearInput } = inputSlice.actions;

// Reducer
export default inputSlice.reducer;
