import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
   value: "dark"

  },
  reducers: {
    setTheme: (state) => {
      const currentTheme = state.value;
      currentTheme === "dark" ? state.value = "light" : state.value = "dark";
      return state;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
