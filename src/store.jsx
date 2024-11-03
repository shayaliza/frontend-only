import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import mailSlice from "./features/mail/mailSlice";
import workspaceslice from "./features/organization/workspaceSlice";

const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem("techsnap");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log("Error loading state from localStorage:", error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem("techsnap", serializedState);
  } catch (error) {
    console.log("Error saving state to localStorage:", error);
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    user: userSlice,
    mail: mailSlice,
    workspace: workspaceslice,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
