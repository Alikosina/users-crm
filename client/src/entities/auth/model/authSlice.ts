import { setTokens } from "@/shared/lib";
import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authActions";
import { AuthStatus, TAuthState } from "./types";

const initialState: TAuthState = {
  user: undefined,
  isAuthorized: false,
  status: AuthStatus.Idle,
  error: undefined,
  token: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(loginUser.pending, (state) => {
      state.status = AuthStatus.Loading;
    }),
      addCase(loginUser.fulfilled, (state, { payload }) => {
        setTokens(payload.tokens);

        if (payload.tokens.access_token) {
          state.token = payload.tokens.access_token;
          state.isAuthorized = true;
          state.status = AuthStatus.Idle;
        }
      });
  },
});

export const { reducer } = authSlice;
