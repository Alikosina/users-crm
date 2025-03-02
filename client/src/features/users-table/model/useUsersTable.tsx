import { AppDispatch, RootState } from "@/app/store";
import { fetchUsersAction } from "@/entities/users/model/usersActions";
import { APP_ROUTES } from "@/shared/constants";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const useUsersTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { data: users, loading } = useSelector(
    (state: RootState) => state.users
  );

  const onEdit = (id: number) => {
    navigate(`${APP_ROUTES.CrmUserBase}/edit/${id}`);
  };

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  return {
    users,
    loading,
    onEdit,
  };
};
