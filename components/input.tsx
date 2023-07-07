import { ComponentPropsWithoutRef, useId } from "react";
import cn from "classnames";
import Icon, { icons } from "@/components/icon";
import Text from "@/components/text";
import styles from "./input.module.css";

type Props = {
  icon?: keyof typeof icons;
  label?: string;
  error?: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({
  className,
  icon,
  error,
  name,
  label,
  ...props
}: Props) {
  const id = useId();
  const identifier = name ?? id;

  return (
    <div className={styles.wrapper}>
      {icon && <Icon name={icon} className={styles.icon} />}

      {label && (
        <Text
          size="s"
          as="label"
          className={cn(styles.label, {
            [styles["has-error"]]: Boolean(error),
          })}
          htmlFor={identifier}
        >
          {label}
        </Text>
      )}

      <input
        className={cn(
          styles.input,
          {
            [styles["has-icon"]]: Boolean(icon),
            [styles["has-error"]]: Boolean(error),
          },
          className,
        )}
        aria-invalid={Boolean(error)}
        aria-labelledby={Boolean(error) ? `${identifier}-error` : undefined}
        name={identifier}
        {...props}
      />

      {error && (
        <Text size="s" className={styles.error} id={`${identifier}-error`}>
          {error}
        </Text>
      )}
    </div>
  );
}
