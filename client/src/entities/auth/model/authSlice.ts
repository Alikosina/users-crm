import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authActions";

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
  extraReducers: ({ addCase }) => {
    addCase(loginUser.fulfilled, (state, { payload }) => {
      // TODO: Save at Local Storage
      console.log("accessToken = ", payload);

      state.isAuthorized = true;
    });
  },
});

export const { reducer } = authSlice;
