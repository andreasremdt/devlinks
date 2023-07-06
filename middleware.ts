import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path === "/") {
    // TODO: implement auth
    if (false) {
      return NextResponse.redirect(new URL("/profile", req.url));
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}
