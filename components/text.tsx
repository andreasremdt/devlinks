import { ComponentPropsWithoutRef, ElementType } from "react";
import cn from "classnames";
import styles from "./text.module.css";

type Props<T extends ElementType> = {
  size?: "m" | "s";
  as?: T;
} & ComponentPropsWithoutRef<T>;

export default function Text<T extends ElementType>({
  size = "m",
  className,
  as,
  ...props
}: Props<T>) {
  const Component = as || "p";

  return <Component className={cn(styles[size], className)} {...props} />;
}
