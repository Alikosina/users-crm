import styles from "./Layout.module.scss";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <div></div>
      <div>{children}</div>
    </div>
  );
};
