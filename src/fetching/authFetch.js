import axiosInstance from "./Interceptor/axiosInstance";
const URL = "https://moviesnap.in/";

const getToken = () => {
  const storedData = localStorage.getItem("techsnap");
  if (!storedData) return null;
  const parsedData = JSON.parse(storedData);
  return parsedData.user?.userData?.reduxAccessToken || null;
};

const RegisterFetch = async (username, email, password) => {
  try {
    const response = await axiosInstance.post(`${URL}api/auth/register/`, {
      username: username,
      email: email,
      password: password,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

const verifyEmailTokenFetch = async (token) => {
  try {
    const response = await axiosInstance.post(`${URL}api/auth/verify-email/`, {
      token: token,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// done
const reqVerificationEmailFetch = async (token) => {
  try {
    const response = await axiosInstance.post(
      `${URL}api/auth/request-verification-email/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

const LoginFetch = async (username, password) => {
  try {
    const response = await axiosInstance.post(`${URL}api/auth/login/`, {
      username: username,
      password: password,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

const refreshTokenFetch = async (refreshToken) => {
  try {
    const response = await axiosInstance.post(`${URL}api/auth/token/refresh/`, {
      refresh: refreshToken,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// token and email
const forgotPasswordFetch = async (email) => {
  try {
    const response = await axiosInstance.post(
      `${URL}api/auth/forgot-password/`,
      {
        email: email,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

// Where to get the token
const ResetPasswordFetch = async (token1, password) => {
  const token = getToken();
  console.log(token1, "password token check");
  console.log(token, password);
  try {
    const response = await axiosInstance.post(
      `${URL}api/auth/reset-password/`,
      {
        token: token1,
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export {
  RegisterFetch,
  verifyEmailTokenFetch,
  reqVerificationEmailFetch,
  LoginFetch,
  refreshTokenFetch,
  forgotPasswordFetch,
  ResetPasswordFetch,
};
