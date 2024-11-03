import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  organizationId: null,
  workSpaceId: null,
  channelId: null,
};

const workSpaceData = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setOrganizationId: (state, action) => {
      state.organizationId = action.payload;
    },
    setWorkspaceId: (state, action) => {
      state.workSpaceId = action.payload;
    },
    setChannelId: (state, action) => {
      state.channelId = action.payload;
    },
  },
});

export const { setOrganizationId, setWorkspaceId, setChannelId } =
  workSpaceData.actions;

export default workSpaceData.reducer;
