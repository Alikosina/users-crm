import { AppDispatch, RootState } from "@/app/store";
import { TCrmUser } from "@/entities/users/api/types";
import { fetchUsersAction } from "@/entities/users/model/usersActions";
import { Column } from "@/shared/ui/table";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useUsersTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: users, loading } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  const columns = useMemo<Column<TCrmUser>[]>(() => {
    return [
      {
        key: "id",
        title: "ID",
      },
      {
        key: "email",
        title: "Email",
      },
    ];
  }, []);

  return {
    users,
    loading,
    columns,
  };
};
