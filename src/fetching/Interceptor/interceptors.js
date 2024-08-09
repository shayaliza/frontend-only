import axiosInstance from "./axiosInstance";
import refreshTokenFetch from "./refresh";
import store from "./../../store";

const setupInterceptors = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const state = store.getState();
      const token = state.user.userData.reduxAccessToken;
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
      if (
        error.response &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        const state = store.getState();
        const newAccessToken = await refreshTokenFetch(
          state.user.userData.reduxRefreshToken
        );
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      }
      return Promise.reject(error);
    }
  );
};

export default setupInterceptors;
