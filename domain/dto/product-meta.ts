import type { productMeta } from "../../infrastructure/db/schemas/product-variants";

export type InsertProductMetaDTO = typeof productMeta.$inferInsert;
