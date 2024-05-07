import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { productImages } from "../db/schemas/products-images";

export const insertProductImageSchema = createInsertSchema(productImages);
export const selectProductImageSchema = createSelectSchema(productImages);
