import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "@/entities/auth/model";

export const store = configureStore({
  reducer: combineReducers({ auth: authReducer }),
});
