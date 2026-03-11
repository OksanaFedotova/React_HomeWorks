import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    password: "",
  },
  reducers: {
    setUser: (state, action) => {
      const { type, payload } = action;
      console.log(type, action);
      state = payload;
      return state;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
