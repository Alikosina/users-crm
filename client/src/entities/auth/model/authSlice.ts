import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  email: string;
};

export enum AuthStatus {
  Idle = "idle",
  Loading = "loading",
  Failed = "failed",
}

const initialState: {
  user: TUser | undefined;
  isAuthorized: boolean;
  status: "idle" | "loading" | "failed";
  error: string | undefined;
} = {
  user: undefined,
  isAuthorized: false,
  status: "idle",
  error: undefined,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {},
});

export const { reducer } = authSlice;
