import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],       // barcha projectlar
  selected: null, // hozir ochilgan project
  loading: false,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects(state, action) {
      state.list = action.payload;
    },
    addProject(state, action) {
      state.list.push(action.payload);
    },
    selectProject(state, action) {
      state.selected = action.payload;
    },
    removeProject(state, action) {
      state.list = state.list.filter((p) => p.id !== action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {
  setProjects,
  addProject,
  selectProject,
  removeProject,
  setLoading,
} = projectSlice.actions;

export default projectSlice.reducer;
