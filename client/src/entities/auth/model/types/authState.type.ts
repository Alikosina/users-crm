import { TUser } from "./user.type";

export enum AuthStatus {
  Idle = "idle",
  Loading = "loading",
  Failed = "failed",
}

export type TAuthState = {
  user?: TUser;
  isAuthorized: boolean;
  status: AuthStatus;
  error?: string;
  token: string | null;
};
