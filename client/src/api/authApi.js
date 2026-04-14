import api from './axios';

// 🔑 LOGIN USER
export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);

    // Save user info (token etc.)
    if (response.data) {
      localStorage.setItem('userInfo', JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Login failed" };
  }
};

// 📝 REGISTER USER
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);

    // Auto login after register
    if (response.data) {
      localStorage.setItem('userInfo', JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.error("Register Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Registration failed" };
  }
};

// 👤 GET USER PROFILE (Protected Route)
export const getUserProfile = async () => {
  try {
    const response = await api.get('/auth/profile');
    return response.data;
  } catch (error) {
    console.error("Profile Error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Failed to fetch profile" };
  }
};

// 🚪 LOGOUT USER
export const logoutUser = () => {
  localStorage.removeItem('userInfo');
};