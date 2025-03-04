import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  component: Table,
  render: () => (
    <Table
      rowKey="id"
      data={[
        {
          id: 1,
          name: "Test",
        },
        {
          id: 2,
          name: "Test2",
        },
      ]}
      columns={[
        {
          key: "id",
          title: "id",
          width: "100px",
        },
        {
          key: "name",
          title: "name",
          renderCell: (row) => <span>Имя: {row.name}</span>,
        },
      ]}
    />
  ),
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  args: {},
};
