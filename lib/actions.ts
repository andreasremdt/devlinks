"use server";

import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import config from "@/lib/config";
import { error, success, trimSensitiveUserData, validate } from "@/lib/helpers";
import schemas from "@/lib/schemas";
import { createAuthSession } from "@/lib/session";

export async function register(data: FormData) {
  const result = validate(schemas.register, data);
  const { email, password } = result.data;

  if (result.error) return result.error;

  try {
    const exists = await prisma.user.findFirst({
      where: { email },
    });

    if (exists) return error("email", "Already exists");

    const created = await prisma.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, config.authHashRounds),
      },
    });

    if (!created) return error(null, "Something went wrong");

    await createAuthSession(created);

    return success(trimSensitiveUserData(created));
  } catch (ex) {
    return error(null, (ex as Error).message);
  }
}
