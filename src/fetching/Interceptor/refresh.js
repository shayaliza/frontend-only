import store from "./../../store";
import { updateAccessToken } from "../../features/user/userSlice";
import axios from "axios";

const refreshTokenFetch = async (refreshToken) => {
  try {
    console.log(refreshToken, "refresh token");
    const response = await axios.post(
      "https://moviesnap.in/api/auth/token/refresh/",
      {
        refresh: refreshToken,
      },
      {
        headers: {
          Authorization: undefined,
        },
      }
    );
    console.log(response, "refresh response");
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
