export enum CrmUserStatus {
  NEW = "NEW",
  COMPLETED = "COMPLETED",
  DELETED = "DELETED",
}

export type TCrmUser = {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  status: CrmUserStatus;
};
