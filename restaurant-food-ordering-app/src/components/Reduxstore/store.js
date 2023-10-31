import { configureStore,combineReducers } from "@reduxjs/toolkit";
import ThemeReducer from "./ThemeReducer";
import AuthReducer from "./AuthReducer";
import CartReducer from "./CartReducer";

const store = configureStore({
  reducer: combineReducers({
    theme: ThemeReducer,
    auth: AuthReducer,
    cart:CartReducer
  }),
});
export default store;
