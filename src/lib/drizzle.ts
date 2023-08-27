import { sql } from "@vercel/postgres";
import { InferModel } from "drizzle-orm";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

import { drizzle } from "drizzle-orm/vercel-postgres";

export const cartTable = pgTable("cartdata", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  product_title: varchar("product_title", { length: 255 }).notNull(),
  product_kind: varchar("product_kind", { length: 255 }).notNull(),
  image_url: varchar("image_url").notNull(),
  product_price: integer("product_price").notNull(),
  product_quantity: integer("product_quantity").notNull(),
});

export type Product = InferModel<typeof cartTable>;
export type NewProduct = InferModel<typeof cartTable, "insert">;

export const db = drizzle(sql);
