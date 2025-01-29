import { Grid2 } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import { InputField } from "../../../shared/ui/input-field";

import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div>
      <h2 className={styles.title}>Login</h2>
      <FormProvider {...methods}>
        <form>
          <Grid2 container flexDirection="column" spacing={2}>
            <div>
              <InputField
                name="email"
                fullWidth
                placeholder="Type email..."
                type="email"
              />
            </div>
            <div>
              <InputField
                name="password"
                fullWidth
                type="password"
                placeholder="Type password..."
              />
            </div>
          </Grid2>
        </form>
      </FormProvider>
    </div>
  );
};
