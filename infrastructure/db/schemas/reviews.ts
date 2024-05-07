import { mysqlTable, serial, text, int, boolean } from "drizzle-orm/mysql-core";
import { users } from "./user";
import { products } from "./products";

export const reviews = mysqlTable("reviews", {
  id: int("id").primaryKey().autoincrement(),
  rating: int("rating"),
  reviewText: text("review_text"),
  isVerified: boolean("is_verified").default(false),
  userName: text("user_name").notNull(),
  userId: int("user_id")
    .notNull()
    .references(() => users.id),
  productId: int("product_id")
    .notNull()
    .references(() => products.id),
});
