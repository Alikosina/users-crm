import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Grid2 } from "@mui/material";

import { AppDispatch } from "@/app/store";
import { loginUser } from "@/entities/auth/model/authActions";
import { InputField } from "@/shared/ui/input-field";
import { Button } from "@/shared/ui/button";
import { LoginParams } from "@/entities/auth/api";

import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();

      methods.handleSubmit((values: LoginParams) => {
        dispatch(loginUser(values));
      })();
    },
    [methods]
  );

  const handleRegister = useCallback(() => {}, []);

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
              <Button fullWidth onClick={handleLogin}>
                Login
              </Button>
            </div>
            <div>
              <Button fullWidth onClick={handleRegister}>
                Register
              </Button>
            </div>
          </Grid2>
        </form>
      </FormProvider>
    </div>
  );
};
