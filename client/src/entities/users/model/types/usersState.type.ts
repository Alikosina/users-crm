import { TCrmUser } from "../../api/types";

export type TUsersState = {
  loading: boolean;
  data: Array<TCrmUser>;
  error: string | null;
};
