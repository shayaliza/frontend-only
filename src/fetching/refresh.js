import axios from "axios";
import store from "../store";
import { updateAccessToken } from "../features/user/userSlice";

const URL = "https://moviesnap.in/";

const refreshTokenFetch = async (refreshToken) => {
  try {
    const response = await axios.post(`${URL}api/auth/token/refresh/`, {
      refresh: refreshToken,
    });
    if (response.status === 200) {
      store.dispatch(updateAccessToken(response.data.access));
      return response.data.access;
    }
  } catch (error) {
    console.error("Failed to refresh token", error);
  }
};

export default refreshTokenFetch;
