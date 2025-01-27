import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../button";
import { Input } from "../input/Input";

import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  component: InputField,
  render: () => {
    const methods = useForm({
      defaultValues: {
        login: "login",
      },
    });

    return (
      <FormProvider {...methods}>
        <form>
          <InputField name="login" />
        </form>
        <Button
          type="button"
          onClick={() => {
            methods.handleSubmit((values) => {
              console.log("values = ", values);
            })();
          }}
        >
          Submit
        </Button>
      </FormProvider>
    );
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
  args: {},
};
