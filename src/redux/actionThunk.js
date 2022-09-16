import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../api/auth.api";

export const registerAction = createAsyncThunk(
  "auth/register",
  async (user) => {
    const { data } = await authApi.regiter(user);
    return data;
  }
);
export const setStatusAction = createAsyncThunk(
  "auth/seSttatus",
  async () => {}
);
