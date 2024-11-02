import axiosInstance from "./../Interceptor/axiosInstance";
const URL = "https://snapgpt.online/blog_service";

const LikeABlog = async (id) => {
  try {
    const response = await axiosInstance.post(`${URL}/blogs/${id}/like/`);
    return response;
  } catch (error) {
    throw error;
  }
};

const UnlikeLikeABlog = async (id) => {
  try {
    const response = await axiosInstance.post(`${URL}/blogs/${id}/like/`);
    return response;
  } catch (error) {
    throw error;
  }
};

export { LikeABlog, UnlikeLikeABlog };
