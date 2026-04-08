import api from './axios';

export const fetchAllCourses = async () => {
  const response = await api.get('/courses');
  return response.data;
};

export const createCourse = async (courseData) => {
  const response = await api.post('/courses', courseData);
  return response.data;
};

// Ready for when you build out single course view pages
export const fetchCourseById = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};