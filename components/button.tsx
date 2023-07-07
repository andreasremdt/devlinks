import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./button.module.css";

type Props = {
  variant?: "primary" | "secondary" | "text";
} & ComponentPropsWithoutRef<"button">;

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(styles.button, styles[variant], className)}
      {...props}
    />
  );
}
