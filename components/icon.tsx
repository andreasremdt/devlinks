import { ComponentPropsWithoutRef, cloneElement } from "react";

type Props = {
  name: keyof typeof icons;
} & ComponentPropsWithoutRef<"svg">;

export const icons = {
  password: (
    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
      <path
        fill="currentColor"
        d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0ZM10 5H6V3.5a2 2 0 1 1 4 0V5Z"
      />
    </svg>
  ),
  email: (
    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
      <path
        fill="currentColor"
        d="M14 3H2a.5.5 0 0 0-.5.5V12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3.5A.5.5 0 0 0 14 3Zm-.5 9h-11V4.637l5.162 4.732a.5.5 0 0 0 .676 0L13.5 4.637V12Z"
      />
    </svg>
  ),
};

export default function Icon({ name, ...props }: Props) {
  return cloneElement(icons[name], {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    ...props,
  });
}
