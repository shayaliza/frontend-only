import { jwtDecode } from "jwt-decode";

const getTokenExpiration = (token) => {
  const decoded = jwtDecode(token);
  return decoded.exp;
};

export default getTokenExpiration;
