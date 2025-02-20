import { Tokens } from "@/shared/lib";
import { apiClient } from "@/shared/lib/apiClient";

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

export const fetchUserProfile = async () => {
  const { data } = await apiClient.get("/auth/profile");

  return data;
};
