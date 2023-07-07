import { Schema } from "joi";
import { User } from "@prisma/client";

export function error(field: string | null, message: string) {
  return { error: { field, message } };
}

export function success<T>(data: T) {
  return { data };
}

export function validate(schema: Schema, data: FormData) {
  const result = schema.validate(Object.fromEntries(data), {
    abortEarly: true,
    stripUnknown: true,
  });

  return {
    error: result.error
      ? error(result.error.details[0].path[0] as string, result.error.message)
          .error
      : undefined,
    data: result.value,
  };
}

export function trimSensitiveUserData(user: User) {
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  };
}
