import { apiClient } from "@/shared/lib";
import { TCrmUser } from "./types";

export const fetchUsers = async () => {
  const { data } = await apiClient.get<TCrmUser[]>("/crm-users/list");

  return data;
};
