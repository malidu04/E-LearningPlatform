import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const fetchCourses = () => API.get("/courses");
export const fetchCourseById = (id) => API.get(`/courses/${id}`);
export const createCourse = (courseData) => API.post("/courses", courseData);  // New function for creating a course
export const registerUser = (userData) => API.post("/users/register", userData);
export const loginUser = (userData) => API.post("/users/login", userData);
export const fetchProgress = (userId) => API.get(`/progress/${userId}`);
