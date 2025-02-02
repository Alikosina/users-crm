import styles from "./Table.module.scss";

type Column<T extends unknown> = {
  key: string;
  title: string;
  renderCell?: (row: T) => React.ReactNode;
  width?: string | number;
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
    <div className={styles.container}>
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
                <td width={col.width} key={col.key}>
                  {col.renderCell ? col.renderCell(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
