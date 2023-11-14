// import { USER_ACTION_TYPES } from "./user.types";

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
    },
    signOutFailed: (state, action) => {
      state.error = action.payload;
    },
    signUpFailed: (state, action) => {
      state.error = action.payload;
    },
    signUpSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signInFailed: (state, action) => {
      state.error = action.payload;
    },
    // Action handled by saga
    // No state modification here as this is handled by a saga
    checkUserSession: (state) => {},
    googleSignInStart: (state) => {},
    emailSignInStart: (state, action) => {},
    signUpStart: (state, action) => {},
    signOutStart: (state) => {},
  },
});

export const {
  signInSuccess,
  signOutSuccess,
  signOutFailed,
  signUpSuccess,
  signUpFailed,
  signInFailed,
  // Action handled by saga
  checkUserSession,
  googleSignInStart,
  emailSignInStart,
  signUpStart,
  signOutStart,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
