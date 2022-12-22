import { createSlice } from "@reduxjs/toolkit";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

// let login = localStorage.getItem("login") || "";
// console.log(login);
let getToken = getCookie("login");
if (!getToken) {
  getToken = null;
}
const initialState = {
  token: getToken,
  //   isLoggedIn: "d",
  //   token: "ds",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // addUser: (state, action) => {
    //   state.users = [...state.users, action.payload];
    // },
    loginUser: (state, action) => {
      setCookie("token", "123");
      return { ...state.auth, token: "123" };
    },
    logoutUser: (state, action) => {
      deleteCookie("token");
      return { ...state.auth, token: null };
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
