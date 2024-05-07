import type { productImages } from "../../infrastructure/db/schemas/products-images";

export type InsertProductImageDTO = typeof productImages.$inferInsert;
