import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    name: "",
    email: "",
    reduxRefreshToken: "",
    reduxAccessToken: "",
  },
  loggedIn: false,
  verified: false,
};

const userData = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const updates = action.payload;
      state.userData = {
        ...state.userData,
        ...updates,
      };
    },
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.userData = {
        name: "",
        email: "",
        reduxRefreshToken: "",
        reduxAccessToken: "",
      };
      state.loggedIn = false;
    },
    setVerified: (state, action) => {
      state.verified = action.payload;
    },
    updateAccessToken: (state, action) => {
      state.userData.reduxAccessToken = action.payload;
    },
  },
});

export const { setUserData, login, logout, setVerified, updateAccessToken } =
  userData.actions;

export default userData.reducer;
