import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  component: Table,
  render: () => (
    <Table
      data={[
        {
          id: 1,
          name: "Test",
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
