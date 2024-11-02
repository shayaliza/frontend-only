import axiosInstance from "./../Interceptor/axiosInstance";
const URL = "https://snapgpt.online/blog_service";

const GetAllUserBlogs = async () => {
  try {
    const response = await axiosInstance.get(`${URL}/blogs/`);
    return response;
  } catch (error) {
    throw error;
  }
};

export { GetAllUserBlogs };
