import axios from "axios";
import { setProjects, addProject, setLoading } from "./projectSlice";

const API_URL = "https://fake-api.example.com/projects"; 
// Keyin real APIga almashtiramiz

export const fetchProjects = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const res = await axios.get(API_URL);

    dispatch(setProjects(res.data));
  } catch (error) {
    console.log("API ERROR:", error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const createProject = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const res = await axios.post(API_URL, data);

    dispatch(addProject(res.data));
  } catch (error) {
    console.log("API ERROR:", error);
  } finally {
    dispatch(setLoading(false));
  }
};
