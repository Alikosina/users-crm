import { apiClient } from "@/shared/lib/apiClient";

export type LoginParams = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginParams) => {
  const { data } = await apiClient.post("/auth/login", {
    email,
    password,
  });

  return data;
};
