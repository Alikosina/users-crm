import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, LoginParams } from "../api";

export const loginUser = createAsyncThunk<string, LoginParams>(
  "auth/loginUser",
  async (data: LoginParams) => {
    const response = await login(data);

    return response;
  }
);
