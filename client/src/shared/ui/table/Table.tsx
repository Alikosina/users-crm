import styles from "./Table.module.scss";

type Props<T extends unknown> = {
  data: T[];
  columns: {
    key: string;
    title: string;
    renderCell?: (row: T) => React.ReactNode;
  }[];
};

export const Table = <T extends unknown>({}: Props<T>) => {
  return <table className={styles.table}></table>;
};
