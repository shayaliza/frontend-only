import axiosInstance from "./../Interceptor/axiosInstance";
const URL = "https://snapgpt.online/workspace_service/api";

const createChannel = async (name, workspaceId, description, is_private) => {
  try {
    const response = await axiosInstance.post(
      `${URL}/workspaces/${workspaceId}/channels/`,
      {
        name,
        description,
        is_private,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const listChannels = async (workspaceId) => {
  try {
    const response = await axiosInstance.get(
      `${URL}/workspaces/${workspaceId}/channels/`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const createChannelMemmership = async (channelId, userId) => {
  try {
    const response = await axiosInstance.post(
      `${URL}/channels/${channelId}/join/`,
      {
        user_id: userId,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteChannelMemmership = async (channelId, userId) => {
  try {
    const response = await axiosInstance.delete(
      `${URL}/channels/${channelId}/leave/`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export {
  createChannel,
  listChannels,
  createChannelMemmership,
  deleteChannelMemmership,
};
