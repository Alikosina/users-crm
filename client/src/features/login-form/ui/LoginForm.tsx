import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@/app/store";
import { loginUser } from "@/entities/auth/model/authActions";
import { Grid2 } from "@mui/material";
import { InputField } from "@/shared/ui/input-field";

import styles from "./LoginForm.module.scss";
import { Button } from "@/shared/ui/button";

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();

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
            <div>
              <Button
                onClick={(e) => {
                  e.preventDefault();

                  methods.handleSubmit((values) => {
                    dispatch(loginUser(values));
                  })();
                }}
              >
                Login
              </Button>
            </div>
          </Grid2>
        </form>
      </FormProvider>
    </div>
  );
};
