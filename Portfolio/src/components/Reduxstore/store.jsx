import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./ThemeReducer";
const store = configureStore({
  reducer: {
    theme: ThemeReducer,
  },
});
export default store;
