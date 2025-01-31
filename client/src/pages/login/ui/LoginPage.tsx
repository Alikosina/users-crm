import { AuthLayout } from "@/widgets/auth-layout";
import { LoginForm } from "../../../features/login-form";

import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  return (
    <AuthLayout>
      <div className={styles.card}>
        <LoginForm />
      </div>
    </AuthLayout>
  );
};
