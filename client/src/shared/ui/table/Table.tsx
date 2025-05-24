import styles from "./Table.module.scss";

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export type Column<T extends unknown> = {
  key: string;
  title: string;
  renderCell?: (row: T) => React.ReactNode;
  width?: string | number;
};

type Props<T> = {
  data: T[];
  rowKey: keyof T;
  columns: Array<Column<T>>;
};

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
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
          {!data.length && <tr className={styles.emptyRow}>
            <td colSpan={columns.length} className={styles.empty}>
              No data
            </td>
          </tr>}
        </tbody>
      </table>
    </div>
  );
};
