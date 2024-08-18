import axiosInstance from "./../Interceptor/axiosInstance";
const URL = "https://moviesnap.in/career_service/";
const getCoursePrequisite = async (courseId) => {
  try {
    const response = await axiosInstance.get(
      `${URL}api/course/creator/courses/${courseId}/prerequisites/`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const createCoursePrequisite = async (courseId, data) => {
  try {
    const response = await axiosInstance.post(
      `${URL}api/course/creator/courses/${courseId}/prerequisites/`,
      data
    );
    // sample data to send
    // {"name":"this is prequistif"}
    return response;
  } catch (error) {
    throw error;
  }
};

const updateCoursePrequisite = async (courseId, data, prerequisitesId) => {
  try {
    const response = await axiosInstance.put(
      `${URL}api/course/creator/courses/${courseId}/prerequisites/${prerequisitesId}/`,
      data
    );
    // sample data to send
    // {"name":"this is prequistif"}
    return response;
  } catch (error) {
    throw error;
  }
};

const delCoursePrequisite = async (courseId, prerequisitesId) => {
  try {
    const response = await axiosInstance.delete(
      `${URL}api/course/creator/courses/${courseId}/prerequisites/${prerequisitesId}/`
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export {
  getCoursePrequisite,
  createCoursePrequisite,
  updateCoursePrequisite,
  delCoursePrequisite,
};
