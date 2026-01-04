// this is used for faster redirects!

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const STAFF_ROLES = new Set(["COACH", "INSTRUCTOR", "ADMIN"]);

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const isStaffPage =
    pathname.startsWith("/rubric-evidence") || pathname.startsWith("/reflection");

  if (!isStaffPage) return NextResponse.next();

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (!STAFF_ROLES.has(token.role)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/rubric-evidence/:path*", "/reflection/:path*"],
};