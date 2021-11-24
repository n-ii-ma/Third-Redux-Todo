import { configureStore } from "@reduxjs/toolkit";
import remainingTasksReducer from "../features/remainingTasks/remainingTasksSlice";
import inputReducer from "../features/input/inputSlice";
import taskReducer from "../features/task/taskSlice";

const preloadedState = localStorage.getItem("ReduxTodo")
  ? JSON.parse(localStorage.getItem("ReduxTodo"))
  : {};

const store = configureStore({
  reducer: {
    remainingTasksReducer,
    inputReducer,
    taskReducer,
  },
  preloadedState,
});

store.subscribe(() =>
  localStorage.setItem("ReduxTodo", JSON.stringify(store.getState()))
);

export default store;
