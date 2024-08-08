import axios from "axios";
import axiosInstance from "./Interceptor/axiosInstance";
const URL = "https://moviesnap.in/";

const getToken = () => {
  const storedData = localStorage.getItem("techsnap");
  if (!storedData) return null;
  const parsedData = JSON.parse(storedData);
  return parsedData.user?.userData?.reduxAccessToken || null;
};
/**
 * Function to create or update profile.
 * @param {Object} profileData - The profile data to be updated.
 * @param {File} profilePic - The profile picture file.
 * @param {File} resume - The resume file.
 * @returns {Promise} - Axios response promise.
 */
const createOrUpdateProfile = (profileData, profilePic, resume) => {
  const token = getToken();
  const formData = new FormData();

  Object.keys(profileData).forEach((key) => {
    formData.append(key, profileData[key]);
  });

  if (profilePic) {
    formData.append("profile_pic", profilePic);
  }

  if (resume) {
    formData.append("resume_file", resume);
  }
  // console.log(formData.get(""), "forrmdat");
  return axiosInstance.put(` ${URL}api/auth/profile/`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

const getProfile = async (id) => {
  const token = getToken();
  try {
    const response = await axiosInstance.get(`${URL}api/auth/profile/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const addExperianceFetch = async (data) => {
  const token = getToken();
  try {
    const response = await axiosInstance.post(
      `${URL}api/auth/experiences/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { createOrUpdateProfile, getProfile, addExperianceFetch };
