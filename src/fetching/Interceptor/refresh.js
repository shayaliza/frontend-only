import axiosInstance from "./axiosInstance";
import store from "./../../store";
import { updateAccessToken } from "../../features/user/userSlice";

const refreshTokenFetch = async (refreshToken) => {
  try {
    const response = await axiosInstance.post("api/auth/token/refresh/", {
      refresh: refreshToken,
    });
    if (response.status === 200) {
      store.dispatch(updateAccessToken(response.data.access));
      return response.data.access;
    }
  } catch (error) {
    console.error("Failed to refresh token", error);
    throw error;
  }
};

export default refreshTokenFetch;
