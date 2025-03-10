import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
  component: Loader,
  render: () => <Loader />,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
  args: {},
};
