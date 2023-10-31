import { createSlice } from "@reduxjs/toolkit";
const Initialvalue = "black";
const ThemeReducer = createSlice({
  name: "theme",
  initialState: { value: Initialvalue },
  reducers: {
    Changetheme: (state,action) => {
      state.value = action.payload;
    },
  },
});
export const { Changetheme } = ThemeReducer.actions;
export default ThemeReducer.reducer;
