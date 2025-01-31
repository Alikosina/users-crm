import { useCallback, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Grid2 } from "@mui/material";

import { AppDispatch } from "@/app/store";
import { loginUser } from "@/entities/auth/model/authActions";
import { InputField } from "@/shared/ui/input-field";
import { Button } from "@/shared/ui/button";
import { LoginParams } from "@/entities/auth/api";

import styles from "./LoginForm.module.scss";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // TODO: Replace "any" by AppState
  const isAuthorized = useSelector((state: any) => state.auth.isAuthorized);

  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (isAuthorized) {
      navigate("/");
    }
  }, [isAuthorized]);

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
          <div className={styles.formContainer}>
            <div>
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
            </div>
            <div className={styles.forgot}>
              <span>Forgot passowrd</span>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
