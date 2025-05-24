import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, loginUser } from "./authActions";
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
    });
    addCase(loginUser.fulfilled, (state, { payload }) => {
      if (payload.tokens.access_token) {
        state.token = payload.tokens.access_token;
        state.isAuthorized = true;
        state.status = AuthStatus.Succeeded;
      }
    });
    addCase(fetchUser.pending, (state) => {
      state.status = AuthStatus.Loading;
    });
    addCase(fetchUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isAuthorized = true;
      state.status = AuthStatus.Succeeded;
    });
    addCase(fetchUser.rejected, (state) => {
      state.status = AuthStatus.Failed;
    });
  },
});

export const { reducer } = authSlice;
