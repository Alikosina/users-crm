import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "@/entities/auth";
import { reducer as usersReducer } from "@/entities/users";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: combineReducers({ auth: authReducer, users: usersReducer }),
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
