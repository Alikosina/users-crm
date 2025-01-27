import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={cn(styles.button, className)}>
      {children}
    </button>
  );
};
