import { Tokens } from "@/shared/lib";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchUserProfile, login, LoginParams } from "../api";
import { TUser } from "./types";

export const loginUser = createAsyncThunk<
  {
    tokens: Tokens;
    userProfile: TUser;
  },
  LoginParams
>("auth/loginUser", async (data: LoginParams) => {
  const tokens = await login(data);

  const userProfile = await fetchUserProfile();

  return {
    tokens,
    userProfile,
  };
});
