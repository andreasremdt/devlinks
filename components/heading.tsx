import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./heading.module.css";

type Props = {
  size?: "m" | "s";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & ComponentPropsWithoutRef<"h1">;

export default function Heading({
  size = "m",
  className,
  as = "h1",
  ...props
}: Props) {
  const Component = as;

  return (
    <Component
      className={cn(styles.base, styles[size], className)}
      {...props}
    />
  );
}
