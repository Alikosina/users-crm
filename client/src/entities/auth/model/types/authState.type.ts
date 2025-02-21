import { TUser } from "./user.type";

export enum AuthStatus {
  Idle = "idle",
  Loading = "loading",
  Failed = "failed",
  Succeeded = "succeeded",
}

export type TAuthState = {
  user?: TUser;
  isAuthorized: boolean;
  status: AuthStatus;
  error?: string;
  token: string | null;
};
