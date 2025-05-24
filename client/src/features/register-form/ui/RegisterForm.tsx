import { Button } from "@/shared/ui/button";
import { InputField } from "@/shared/ui/input-field";
import { Grid2 } from "@mui/material";
import { FormProvider } from "react-hook-form";
import { useRegisterForm } from "../model";

import styles from "./RegisterForm.module.scss";

export const RegisterForm = () => {
  const { methods, handleLogin } = useRegisterForm();

  return (
    <div>
      <h2 className={styles.title}>Register</h2>
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
                  <Button fullWidth onClick={() => {}}>
                    Register
                  </Button>
                </div>
                <div>
                  <Button fullWidth onClick={handleLogin}>
                    Login
                  </Button>
                </div>
              </Grid2>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
