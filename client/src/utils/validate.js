export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  // Requires at least 6 characters
  return password.length >= 6;
};

export const validateCourseForm = (data) => {
  const errors = {};
  if (!data.title) errors.title = 'Title is required';
  if (!data.category) errors.category = 'Category is required';
  if (data.price < 0) errors.price = 'Price cannot be negative';
  if (!data.description) errors.description = 'Description is required';
  return errors;
};