import { InputHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Input.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: Props) => {
  return <input {...props} className={cn(styles.input, className)} />;
};
