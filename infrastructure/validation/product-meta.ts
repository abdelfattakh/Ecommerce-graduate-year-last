import { createSelectSchema } from "drizzle-zod";
import { productMeta } from "../db/schemas/product-variants";
import { z } from "zod";

export const selectProductMetaSchema = createSelectSchema(productMeta);

export const characteristicsSchema = z
  .object({
    key: z.string(),
    value: z.string(),
  })
  .array();

export const insertProductMetaSchema = z.object({
  characteristics: characteristicsSchema,
  productId: z.number(),
});
