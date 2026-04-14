import api from './axios';

// 📚 GET ALL COURSES
export const fetchAllCourses = async () => {
  try {
    const response = await api.get('/courses');
    return response.data;
  } catch (error) {
    console.error("Fetch Courses Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Failed to fetch courses" };
  }
};

// 📖 GET SINGLE COURSE BY ID
export const fetchCourseById = async (id) => {
  try {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error("Fetch Course Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Failed to fetch course" };
  }
};

// ➕ CREATE COURSE (Protected)
export const createCourse = async (courseData) => {
  try {
    const response = await api.post('/courses', courseData);
    return response.data;
  } catch (error) {
    console.error("Create Course Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Failed to create course" };
  }
};

// ✏️ UPDATE COURSE (Protected)
export const updateCourse = async (id, courseData) => {
  try {
    const response = await api.put(`/courses/${id}`, courseData);
    return response.data;
  } catch (error) {
    console.error("Update Course Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Failed to update course" };
  }
};

// ❌ DELETE COURSE (Protected)
export const deleteCourse = async (id) => {
  try {
    const response = await api.delete(`/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error("Delete Course Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Failed to delete course" };
  }
};