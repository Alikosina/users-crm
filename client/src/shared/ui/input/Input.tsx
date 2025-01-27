import { InputHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Input.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ value, onChange, className }: Props) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={cn(styles.input, className)}
    />
  );
};
