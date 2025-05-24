import { Grid2 } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../button";
// import { Input } from "../input/Input";

import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  component: InputField,
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm({
      defaultValues: {
        login: "login",
      },
    });

    return (
      <FormProvider {...methods}>
        <Grid2 container spacing={2} alignItems="center">
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
        </Grid2>
      </FormProvider>
    );
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
  args: {},
};
