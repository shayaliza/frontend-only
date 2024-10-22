import axiosInstance from "./../Interceptor/axiosInstance";
const URL = "https://snapgpt.online/career_service/";

// https://moviesnap.in/career_service/api/course/creator/courses/==
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
  // console.log(data, "data we got in createACourceFetch");
  // console.log(mobileBannerImage, "mobileBannerImage");
  // console.log(desktopBannerImage, "desktopBannerImage");
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  // console.log("FormData entries:");
  // for (let [key, value] of formData.entries()) {
  //   console.log(key, value);
  // }
  if (mobileBannerImage) {
    formData.append("mobile_banner_image", mobileBannerImage);
  }

  if (desktopBannerImage) {
    formData.append("desktop_banner_image", desktopBannerImage);
  }

  for (let [key, value] of formData.entries()) {
    console.log(key, value);
  }

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
    console.log("Response:", response, response.data);

    return response;
  } catch (error) {
    console.error("Error during API call:", error);
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
