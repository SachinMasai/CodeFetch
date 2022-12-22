import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return { ...state.auth, isLoggedIn: "true", token: "123" };
    },
    logoutUser: (state, action) => {
      return { ...state.auth, isLoggedIn: false, token: null };
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
