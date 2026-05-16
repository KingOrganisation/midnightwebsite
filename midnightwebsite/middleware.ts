export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/recensioni/:path*",
    "/candidature/:path*",
    "/unban/:path*",
    "/suggerimenti/:path*"
  ]
};