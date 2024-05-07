import { int, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

export const category = mysqlTable("category", {
  id: int("id").primaryKey().autoincrement(),
  categoryName: varchar("category_name", { length: 40 }).notNull().unique(),
  previewImageLink: text("preview_image_link").notNull(),
});
