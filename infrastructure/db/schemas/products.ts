import {
  mysqlTable,
  varchar,
  text,
  decimal,
  int,
} from "drizzle-orm/mysql-core";
import { category } from "./category";

export const products = mysqlTable("products", {
  id: int("id").primaryKey().autoincrement(),
  productName: varchar("product_name", { length: 50 }).notNull().unique(),
  description: varchar("description", { length: 256 }).notNull(),
  firstPrice: decimal("first_price").notNull(),
  currentPrice: decimal("current_price").notNull(),
  discount: int("discount"),
  previewImageLink: text("preview_image_link"),
  rating: decimal("rating"),
  categoryId: int("category_id").references(() => category.id),
});
