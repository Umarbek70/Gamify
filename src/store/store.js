import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../features/projects/projectSlice";

const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

export default store;
