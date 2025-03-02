import { useMemo } from "react";

import { TCrmUser } from "@/entities/users/api/types";
import { Column, Table } from "@/shared/ui/table";
import { Edit } from "@mui/icons-material";

import { useUsersTable } from "../model";

import styles from "./UsersTable.module.scss";

export const UsersTable = () => {
  const { users, onEdit } = useUsersTable();

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
      {
        key: "actions",
        title: "",
        renderCell: (row) => (
          <div>
            <Edit
              className={styles.icon}
              onClick={() => {
                onEdit(row.id);
              }}
              fontSize="small"
            />
          </div>
        ),
      },
    ];
  }, []);

  return (
    <div>
      <Table data={users} columns={columns} rowKey="id" />
    </div>
  );
};
