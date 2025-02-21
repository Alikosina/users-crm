import { Tokens } from "@/shared/lib";
import { apiClient } from "@/shared/lib/apiClient";
import { TUser } from "../model/types";

export type LoginParams = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginParams) => {
  const { data } = await apiClient.post<Tokens>("/auth/login", {
    email,
    password,
  });

  return data;
};

export const fetchUserProfile = async (): Promise<TUser> => {
  const { data } = await apiClient.get("/auth/profile");

  return data;
};
