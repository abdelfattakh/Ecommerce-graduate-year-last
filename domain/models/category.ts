import type { category } from "../../infrastructure/db/schemas/category";

export type Category = typeof category.$inferSelect;
