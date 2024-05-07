import { int, mysqlTable, text } from "drizzle-orm/mysql-core";
import { products } from "./products";

export const productImages = mysqlTable("products-images", {
  id: int("id").primaryKey().autoincrement(),
  previewImageLink: text("preview_image_link").notNull(),
  productId: int("productId").references(() => products.id),
});
