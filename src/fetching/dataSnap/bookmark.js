import axiosInstance from "./../Interceptor/axiosInstance";
const URL = "https://snapgpt.online/blog_service";

const UserBookmark = async () => {
  try {
    const response = await axiosInstance.get(`${URL}/blogs/bookmarked-blogs/`);
    return response;
  } catch (error) {
    throw error;
  }
};
const AddBookmark = async (id) => {
  try {
    const response = await axiosInstance.post(`${URL}/blogs/bookmark/`, {
      blogs: id,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
const DeleteBookmark = async (id) => {
  try {
    const response = await axiosInstance.delete(`${URL}/blogs/bookmark/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export { UserBookmark, AddBookmark, DeleteBookmark };
