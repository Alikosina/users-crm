import styles from "./Table.module.scss";

type Column<T extends unknown> = {
  key: string;
  title: string;
  renderCell?: (row: T) => React.ReactNode;
};

type Props<T extends unknown> = {
  data: T[];
  rowKey: string;
  columns: Array<Column<T>>;
};

export const Table = <T extends unknown>({
  data,
  columns,
  rowKey,
}: Props<T>) => {
  return (
    <table className={styles.table}>
      <thead>
        {columns.map((col) => (
          <th key={col.key}>{col.title}</th>
        ))}
      </thead>
      <tbody>
        {data.map((row: any) => (
          <tr key={row[rowKey]}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
