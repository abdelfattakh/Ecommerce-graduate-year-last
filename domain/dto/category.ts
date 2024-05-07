import type { category } from "../../infrastructure/db/schemas/category";

export type InsertCategoryDTO = typeof category.$inferInsert;
