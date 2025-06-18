import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const api = axios.create({
  baseURL: "https://notenet-drf-16de1359cbd6.herokuapp.com/",
});

export const handleUnauthorized = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.setItem(
    "unauthorizedMessage",
    "Your session has expired. Please sign in again."
  );
  setTimeout(() => {
    window.location.replace("/signin");
  }, 3000); // 3 seconds delay
};

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      !error.config.url.includes("/api/token/")
    ) {
      handleUnauthorized();
    }
    return Promise.reject(error);
  }
);

export default api;
