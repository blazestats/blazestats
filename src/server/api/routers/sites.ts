import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "~/database";
import { type Site, sites, v } from "~/database/schemas/site";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { shortid } from "~/utils/id";

export const sitesRouter = createTRPCRouter({
  listOwn: protectedProcedure.input(z.undefined()).query(async ({ ctx }) => {
    return (await db
      .select()
      .from(sites)
      .where(eq(sites.userId, ctx.auth.userId))) as Site[];
  }),
  insert: protectedProcedure
    .input(v.insertSiteSchema)
    .mutation(async ({ ctx, input }) => {
      input.id = shortid();
      input.userId = ctx.auth.userId;

      await db.insert(sites).values(input);
    }),
});
