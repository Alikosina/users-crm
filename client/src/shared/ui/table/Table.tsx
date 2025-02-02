import styles from "./Table.module.scss";

type Props<T extends unknown> = {
  data: T[];
  columns: {
    key: string;
    title: string;
    renderCell?: (row: T) => React.ReactNode;
  }[];
};

export const Table = <T extends unknown>({ data, columns }: Props<T>) => {
  return (
    <table className={styles.table}>
      <thead>
        {columns.map((col) => (
          <th>{col.title}</th>
        ))}
      </thead>
      <tbody>
        {data.map((row: any) => (
          <tr>
            {columns.map((col) => (
              <td>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
