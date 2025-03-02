import bg from "./auth-bg.png";

import styles from "./AuthLayout.module.scss";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.aside}>
        <img width={600} src={bg} />
      </div>
      <div className={styles.main}>
        <div className={styles.card}>{children}</div>
      </div>
    </div>
  );
};
