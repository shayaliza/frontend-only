import { jwtDecode } from "jwt-decode";

const getTokenExpiration = (token) => {
  const decoded = jwtDecode(token);
  return decoded.exp;
};

const getUserId = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user_id;
};

export { getTokenExpiration, getUserId };
