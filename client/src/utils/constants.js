export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api';

export const ROLES = {
  STUDENT: 'student',
  INSTRUCTOR: 'instructor',
  ADMIN: 'admin',
};

export const COURSE_CATEGORIES = [
  'Web Development',
  'Data Science',
  'Mobile App Development',
  'Design',
  'Marketing',
  'Business',
];