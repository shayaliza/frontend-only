import axiosInstance from "./../Interceptor/axiosInstance";
const URL = "https://snapgpt.online/blog_service";

const GetAllBlogs = async () => {
  try {
    const response = await axiosInstance.get(`${URL}/creator/blogs/`);
    return response;
  } catch (error) {
    throw error;
  }
};

const GetOneBlog = async (id) => {
  try {
    const response = await axiosInstance.get(`${URL}/creator/blogs/${id}/`);
    return response;
  } catch (error) {
    throw error;
  }
};

const CreateABlog = async (
  title, //string
  content, //string
  banner_image, //file
  is_trending, //true
  status //draft
) => {
  const formData = new FormData();

  formData.append("title", title);
  formData.append("content", content);
  if (banner_image) {
    formData.append("banner_image", banner_image);
  }
  formData.append("is_trending", is_trending);
  formData.append("status", status);
  for (let [key, value] of formData.entries()) {
    console.log(key, value);
  }

  try {
    const response = await axiosInstance.post(
      `${URL}/creator/blogs/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const UpdateABlog = async (
  id,
  title, //string
  content, //string
  banner_image, //file
  is_trending, //true
  status //draft
) => {
  const formData = new FormData();

  formData.append("title", title);
  formData.append("content", content);
  if (banner_image) {
    formData.append("banner_image", banner_image);
  }
  formData.append("is_trending", is_trending);
  formData.append("status", status);
  for (let [key, value] of formData.entries()) {
    console.log(key, value);
  }

  try {
    const response = await axiosInstance.put(
      `${URL}/creator/blogs/${id}/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const DeleteABlog = async (id) => {
  try {
    const response = await axiosInstance.delete(`${URL}/creator/blogs/${id}/`);
    return response;
  } catch (error) {
    throw error;
  }
};

export { CreateABlog, UpdateABlog, GetAllBlogs, GetOneBlog, DeleteABlog };
