import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { category } from "../db/schemas/category";

export const insertCategorySchema = createInsertSchema(category);
export const selectCategorySchema = createSelectSchema(category);
