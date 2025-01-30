import { Layout } from "@/widgets/layout";
import { LoginForm } from "../../../features/login-form";

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
