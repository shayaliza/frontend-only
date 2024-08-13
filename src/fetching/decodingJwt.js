import { jwtDecode } from "jwt-decode";

const getUserId = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user_id;
};

const getUserVerified = (token) => {
  const decoded = jwtDecode(token);
  return decoded.is_email_verified;
};

const getAllData = (token) => {
  const decoded = jwtDecode(token);
  return decoded;
};

export { getUserId, getUserVerified, getAllData };
