import { AppDispatch, RootState } from "@/app/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { fetchUser } from "../model/authActions";
import { AuthStatus } from "../model/types";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (authStatus === AuthStatus.Idle) {
      dispatch(fetchUser());
    }
  }, [authStatus]);

  if (authStatus === AuthStatus.Idle || authStatus === AuthStatus.Loading) {
    return <div>Loading</div>;
  }

  if (authStatus === AuthStatus.Failed) {
    return <Navigate to="/login" />;
  }

  if (authStatus === AuthStatus.Succeeded) {
    return <>{children}</>;
  }

  return <Navigate to="/login" />;
};
