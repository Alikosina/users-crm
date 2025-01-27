import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  render: () => <Input />,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {},
};
