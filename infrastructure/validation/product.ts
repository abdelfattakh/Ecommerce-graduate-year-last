import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { products } from "../db/schemas/products";
import { z } from "zod";

export const insertProductSchema = createInsertSchema(products, {
  previewImageLink: z.string().url(),
});
export const selectProductSchema = createSelectSchema(products);
