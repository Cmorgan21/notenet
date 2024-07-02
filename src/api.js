import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const api = axios.create({
  baseURL: "https://notenet-api-99d389ccf2f7.herokuapp.com/",
});

export const handleUnauthorized = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  // Redirect to sign-in page and set a message in localStorage
  localStorage.setItem(
    "unauthorizedMessage",
    "Your session has expired. Please sign in again."
  );
  window.location.replace("/signin");
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
    if (error.response && error.response.status === 401) {
      handleUnauthorized();
    }
    return Promise.reject(error);
  }
);

export default api;
