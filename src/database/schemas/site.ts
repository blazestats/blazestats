import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { type InferModel, relations } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { domains } from "~/database/schemas/domains";

export const sites = mysqlTable("sites", {
  id: varchar("id", { length: 12 }).primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  userId: varchar("user_id", { length: 40 }).notNull(),
});

export const sitesRelations = relations(sites, ({ many }) => ({
  domains: many(domains),
}));

export type Site = InferModel<typeof sites>;
export type NewSite = InferModel<typeof sites, "insert">;

export const v = {
  insertSiteSchema: createInsertSchema(sites),
  selectSiteSchema: createSelectSchema(sites),
};
