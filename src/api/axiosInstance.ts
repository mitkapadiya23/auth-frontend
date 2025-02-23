import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://8993-2409-40c1-3f-bdc3-f555-1547-b8e7-461a.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
