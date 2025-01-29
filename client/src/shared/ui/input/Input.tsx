import { InputHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Input.module.scss";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean;
};

export const Input = ({ className, fullWidth, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={cn(styles.input, className, {
        [styles.fullWidth]: !!fullWidth,
      })}
    />
  );
};
