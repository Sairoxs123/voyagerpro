import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token to every request if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 responses globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      window.location.href = "/signin";
    }
    return Promise.reject(error);
  }
);

// Auth helpers
export const setAuth = (token, name, email) => {
  localStorage.setItem("token", token);
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
};

export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("email");
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

export const getUser = () => ({
  name: localStorage.getItem("name") || "",
  email: localStorage.getItem("email") || "",
});

export default api;
