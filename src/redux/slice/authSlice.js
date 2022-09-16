import { createSlice } from "@reduxjs/toolkit";
import { registerAction, setStatusAction } from "../actionThunk";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    users: [],
    isLogin: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
    });
    builder.addCase(setStatusAction.fulfilled, (state, action) => {
      state.status = "idle";
    });
  },
});
export default authSlice;
