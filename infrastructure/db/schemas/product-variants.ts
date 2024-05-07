import { mysqlTable, text, int } from "drizzle-orm/mysql-core";
import { products } from "./products";

export const productMeta = mysqlTable("product-meta", {
  id: int("id").primaryKey().autoincrement(),
  productId: int("productId")
    .references(() => products.id)
    .notNull(),
  key: text("key").notNull(),
  value: text("value").notNull(),
});
