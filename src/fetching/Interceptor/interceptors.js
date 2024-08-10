import axiosInstance from "./axiosInstance";
import refreshTokenFetch from "./refresh";
import store from "./../../store";
import { logout } from "../../features/user/userSlice";

const setupInterceptors = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const state = store.getState();
      const token = state.user.userData.reduxAccessToken;
      console.log("Req Through Interceptos");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      console.log(originalRequest);
      console.log("Issue in Original Request inside Interceptors");
      // Handle token refresh on 401 response
      if (
        error.response &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        try {
          console.log("Getting New Access Token");

          const state = store.getState();
          const newAccessToken = await refreshTokenFetch(
            state.user.userData.reduxRefreshToken
          );

          axiosInstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${newAccessToken}`;
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error("Token refresh failed, logging out", refreshError);
          store.dispatch(logout());
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
};

export default setupInterceptors;
