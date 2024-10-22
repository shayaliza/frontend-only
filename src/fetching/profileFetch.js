import axiosInstance from "./Interceptor/axiosInstance";
// import { getUserId } from "./decodingJwt";
const URL = "https://snapgpt.online/";

// const getToken = () => {
//   const storedData = localStorage.getItem("techsnap");
//   if (!storedData) return null;
//   const parsedData = JSON.parse(storedData);
//   return parsedData.user?.userData?.reduxAccessToken || null;
// };

// const user_id = async () => {
//   const token = await getToken();
//   return getUserId(token);
// };

const createOrUpdateProfile = (profileData, profilePic, resume) => {
  // const token = getToken();
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
  return axiosInstance.put(`${URL}api/auth/profile/`, formData, {
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

const getProfile = async (id) => {
  try {
    const response = await axiosInstance.get(
      `${URL}api/auth/profile/${id}/`,
      {}
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const addExperianceFetch = async (data) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.post(
      `${URL}api/auth/experiences/`,
      data,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// Here the Id will be the experiance id
const updateExperianceFetch = async (data, id) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.put(
      `${URL}api/auth/experiences/${id}/`,
      data,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
const deleteExperianceFetch = async (id) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.delete(
      `${URL}api/auth/experiences/${id}/`,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

//@Skills Section
const addSkillFetch = async (data) => {
  // const token = getToken();

  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("skill_type", data.skill_type);

  try {
    const response = await axiosInstance.post(
      `${URL}api/auth/skills/`,
      formData,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        //   "Content-Type": "multipart/form-data",
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const updateSkillFetch = async (data, id) => {
  // const token = getToken();
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("skill_type", data.skill_type);

  try {
    const response = await axiosInstance.put(
      `${URL}api/auth/skills/${id}/`,
      formData,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        //   "Content-Type": "multipart/form-data",
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteSkillFetch = async (id) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.delete(
      `${URL}api/auth/skills/${id}/`,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

//@Proof of Work

const addWorkProofFetch = async (data) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.post(
      `${URL}api/auth/proofs-of-work/`,
      data,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const updateWorkProofFetch = async (data, id) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.put(
      `${URL}api/auth/proofs-of-work/${id}/`,
      data,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteWorkProofFetch = async (id) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.delete(
      `${URL}api/auth/proofs-of-work/${id}/`,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
// @Give Recommendation

const addRecommendationFetch = async (data) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.post(
      `${URL}api/auth/recommendations/`,
      data,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
const updateRecommendationFetch = async (data, id) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.put(
      `${URL}api/auth/recommendations/${id}/`,
      data,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteRecommendationFetch = async (id) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.delete(
      `${URL}api/auth/recommendations/${id}/`,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// @Language
const addLanguageFetch = async (data) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.post(
      `${URL}api/auth/languages/`,
      data,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
const updateLanguageFetch = async (data, id) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.put(
      `${URL}api/auth/languages/${id}/`,
      data,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteLanguageFetch = async (id) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.delete(
      `${URL}api/auth/languages/${id}/`,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
//@ Social Form

const addSocialFetch = async (data) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.post(
      `${URL}api/auth/social-accounts/`,
      data,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
const updateSocialFetch = async (data, id) => {
  // const token = getToken();
  console.log(data, "data we send");
  console.log(id, "id we send");

  try {
    const response = await axiosInstance.put(
      `${URL}api/auth/social-accounts/${id}/`,
      data,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteSocialFetch = async (id) => {
  // const token = getToken();
  try {
    const response = await axiosInstance.delete(
      `${URL}api/auth/social-accounts/${id}/`,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
export {
  createOrUpdateProfile,
  getProfile,
  addExperianceFetch,
  updateExperianceFetch,
  deleteExperianceFetch,
  addSkillFetch,
  updateSkillFetch,
  deleteSkillFetch,
  addWorkProofFetch,
  updateWorkProofFetch,
  deleteWorkProofFetch,
  addRecommendationFetch,
  updateRecommendationFetch,
  deleteRecommendationFetch,
  addLanguageFetch,
  updateLanguageFetch,
  deleteLanguageFetch,
  addSocialFetch,
  updateSocialFetch,
  deleteSocialFetch,
};
