import axiosInstance from "./../Interceptor/axiosInstance";
const URL = "https://moviesnap.in/career_service/";
const getCourseSkill = async (courseId) => {
  try {
    const response = await axiosInstance.get(
      `${URL}api/course/creator/courses/${courseId}/skills/`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const createCourseSkill = async (courseId, data) => {
  try {
    const response = await axiosInstance.post(
      `${URL}api/course/creator/courses/${courseId}/skills/`,
      data
    );
    // sample data to send
    // {"name":"this is prequistif"}
    return response;
  } catch (error) {
    throw error;
  }
};

const updateCourseSkill = async (courseId, data, skillsId) => {
  try {
    const response = await axiosInstance.put(
      `${URL}api/course/creator/courses/${courseId}/skills/${skillsId}/`,
      data
    );
    // sample data to send
    // {"name":"this is prequistif"}
    return response;
  } catch (error) {
    throw error;
  }
};

const delCourseSkill = async (courseId, skillsId) => {
  try {
    const response = await axiosInstance.delete(
      `${URL}api/course/creator/courses/${courseId}/skills/${skillsId}/`
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export { getCourseSkill, createCourseSkill, updateCourseSkill, delCourseSkill };
