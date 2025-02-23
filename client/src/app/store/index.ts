import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "@/entities/auth";
import { reducer as usersReducer } from "@/entities/users";

export const store = configureStore({
  reducer: combineReducers({ auth: authReducer, users: usersReducer }),
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
