import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timer: 0,
  canResend: false,
  resendAttempts: 0,
  lastResendTimestamp: null,
};

const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    setTimer(state, action) {
      state.timer = action.payload;
    },
    setCanResend(state, action) {
      state.canResend = action.payload;
    },
    incrementResendAttempts(state) {
      state.resendAttempts += 1;
    },
    setLastResendTimestamp(state, action) {
      state.lastResendTimestamp = action.payload;
    },
    clearMailData(state) {
      state = initialState;
      return state;
    },
  },
});

export const {
  setTimer,
  setCanResend,
  incrementResendAttempts,
  setLastResendTimestamp,
  clearMailData,
} = mailSlice.actions;
export default mailSlice.reducer;
