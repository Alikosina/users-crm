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
    });
    addCase(fetchUsersAction.rejected, (state, { payload }) => {
      state.error = "Error";
    });
  },
});

export const { reducer } = usersSlice;
