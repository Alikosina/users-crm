import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../api";
import { TCrmUser } from "../api/types";

export const fetchUsersAction = createAsyncThunk<TCrmUser[]>(
  "users/fetchList",
  async () => {
    try {
      return await fetchUsers();
    } catch (error) {
      throw error;
    }
  }
);
