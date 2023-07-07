import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "@/lib/session";

const PROTECTED_ROUTES = ["/links", "/profile", "/"];
const AUTH_ROUTES = ["/login", "/register", "/"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const session = await verifyJWT(req);

  if (!session && PROTECTED_ROUTES.includes(path)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (session && AUTH_ROUTES.includes(path)) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return NextResponse.next();
}
