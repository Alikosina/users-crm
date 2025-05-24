import { createSlice } from "@reduxjs/toolkit";
import { TUsersState } from "./types";
import { fetchUsersAction } from "./usersActions";

const initialState: TUsersState = {
  error: null,
  data: [],
  loading: false,
};

const usersSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(fetchUsersAction.pending, (state) => {
      state.loading = true;
    });
    addCase(fetchUsersAction.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });
    addCase(fetchUsersAction.rejected, (state) => {
      state.error = "Error";
      state.loading = false;
    });
  },
});

export const { reducer } = usersSlice;
