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
        },
        {
          key: "name",
          title: "name",
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
