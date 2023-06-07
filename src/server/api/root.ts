import { sitesRouter } from "~/server/api/routers/sites";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  sites: sitesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
