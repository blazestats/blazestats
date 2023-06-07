import { type InferModel } from "drizzle-orm";
import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const domains = mysqlTable("domains", {
  id: varchar("id", { length: 12 }).primaryKey(),
  siteId: varchar("site_id", { length: 12 }).notNull(),
  value: varchar("value", { length: 256 }).notNull(),
});

export type Domain = InferModel<typeof domains>;
export type NewDomain = InferModel<typeof domains, "insert">;

export const v = {
  insertDomainSchema: createInsertSchema(domains),
  selectDomainSchema: createSelectSchema(domains),
};
