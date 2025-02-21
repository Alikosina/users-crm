import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "@/entities/auth/model";

export const store = configureStore({
  reducer: combineReducers({ auth: authReducer }),
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
