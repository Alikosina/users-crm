import { Layout } from "../../../shared/ui/layout";
import { LoginForm } from "../../../widgets/login-form";

import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  return (
    <Layout>
      <div className={styles.card}>
        <LoginForm />
      </div>
    </Layout>
  );
};
