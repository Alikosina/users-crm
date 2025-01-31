import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export const Button = ({ children, className, fullWidth, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.button, className, {
        [styles.fullWidth]: !!fullWidth,
      })}
    >
      {children}
    </button>
  );
};
