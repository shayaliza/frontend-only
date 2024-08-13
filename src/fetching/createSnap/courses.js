import axiosInstance from "./../Interceptor/axiosInstance";
const URL = "https://moviesnap.in/";

const getCreaterCourseFetch = async () => {
  try {
    const response = await axiosInstance.get(
      `${URL}api/course/creator/courses/`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const createACourceFetch = async (
  mobileBannerImage,
  desktopBannerImage,
  data
) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  if (mobileBannerImage) {
    formData.append("mobile_banner_image", mobileBannerImage);
  }

  if (desktopBannerImage) {
    formData.append("desktop_banner_image", desktopBannerImage);
  }
  console.log(formData.getAll);
  try {
    const response = await axiosInstance.post(
      `${URL}api/course/creator/courses/`,
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
const getOneCourseFetch = async (id) => {
  try {
    const response = await axiosInstance.get(
      `${URL}api/course/creator/courses/${id}/`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
const updateOneCourseFetch = async (
  id,
  mobile_banner_image,
  desktop_banner_image,
  data
) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  if (mobile_banner_image) {
    formData.append("mobile_banner_image", mobile_banner_image);
  }

  if (desktop_banner_image) {
    formData.append("desktop_banner_image", desktop_banner_image);
  }
  try {
    const response = await axiosInstance.put(
      `${URL}api/course/creator/courses/${id}/`,
      formData
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteOneCourseFetch = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `${URL}api/course/creator/courses/${id}/`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export {
  getCreaterCourseFetch,
  createACourceFetch,
  getOneCourseFetch,
  updateOneCourseFetch,
  deleteOneCourseFetch,
};
