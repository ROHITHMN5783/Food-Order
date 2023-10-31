import { createSlice } from "@reduxjs/toolkit";

const AuthReducer = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: localStorage.getItem("idToken") ? true : false,
    idToken: localStorage.getItem("idToken") || null,
    loggedinEmail: localStorage.getItem("loggedinemail") || null,
  },
  reducers: {
    loginstate: (state, action) => {
      state.isAuthenticated = true;
      state.idToken = action.payload.idToken;
      state.loggedinEmail = action.payload.email;
      localStorage.setItem("idToken", action.payload.idToken);
      localStorage.setItem("loggedinemail", action.payload.email);
    },
    logoutstate: (state) => {
      state.isAuthenticated = false;
      state.idToken = null;
      state.loggedinEmail = null;
      localStorage.removeItem("idToken");
      localStorage.removeItem("loggedinemail");
    },
  },
});
export const { loginstate, logoutstate } = AuthReducer.actions;
export default AuthReducer.reducer;
