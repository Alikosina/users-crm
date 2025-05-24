import { forwardRef, InputHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Input.module.scss";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, fullWidth, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={cn(styles.input, className, {
          [styles.fullWidth]: !!fullWidth,
        })}
      />
    );
  }
);
