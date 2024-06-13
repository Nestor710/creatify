import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/api/webhooks/clerk", "/sign-in(.*)", "/sign-up(.*)", "/api/webhooks/stripe"]);

export default clerkMiddleware((auth, request) => {
  // publicRoutes: ["/api/:path*"];
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};