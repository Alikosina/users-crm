import { Table } from "@/shared/ui/table";
import { useUsersTable } from "../model";

export const UsersTable = () => {
  const { users, columns } = useUsersTable();

  return (
    <div>
      <Table data={users} columns={columns} rowKey="id" />
    </div>
  );
};
