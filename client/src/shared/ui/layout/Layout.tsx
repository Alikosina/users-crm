import bg from "./auth-bg.png";

import styles from "./Layout.module.scss";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.aside}>
        <img width={600} src={bg} />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};
