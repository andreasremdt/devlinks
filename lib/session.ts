import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { User } from "@prisma/client";
import config from "@/lib/config";

export function createAuthSession(session: string) {
  const exp = 1000 * 60 * 60;

  cookies().set(config.authCookieName, session, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: exp,
  });
}

export function encryptJWT(user: Pick<User, "id" | "email">) {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60;
  const { id, email } = user;

  return new SignJWT({ id, email })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(config.authSecret));
}

export async function verifyJWT(req: NextRequest) {
  const cookie = req.cookies.get(config.authCookieName);

  if (!cookie) {
    return false;
  }

  try {
    const { payload } = await jwtVerify(
      cookie.value,
      new TextEncoder().encode(config.authSecret),
    );

    if ("email" in payload && "id" in payload) {
      return payload;
    }
  } catch (ex) {
    if ((ex as any).code === "ERR_JWT_EXPIRED") {
      req.cookies.delete(config.authCookieName);
    }

    return false;
  }

  return false;
}
