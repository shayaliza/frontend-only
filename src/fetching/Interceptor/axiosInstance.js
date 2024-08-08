import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://moviesnap.in/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
