import { jwtDecode } from "jwt-decode";

const getUserId = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user_id;
};

export { getUserId };
