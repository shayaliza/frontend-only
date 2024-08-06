import axios from "axios";
const URL = "https://moviesnap.in/";

const RegisterFetch = async (username, email, password) => {
  try {
    console.log(
      "username: ",
      username,
      "email: ",
      email,
      "password: ",
      password
    );
    const response = await axios.post(`${URL}api/auth/register/`, {
      username: username,
      email: email,
      password: password,
    });
    // const data = response.data;
    // console.log("data: ", data);
    // console.log("response: ", response);
    // 201 for created
    return response;
  } catch (error) {
    return error.response;
  }
};

export { RegisterFetch };
