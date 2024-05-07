import type { productMeta } from "../../infrastructure/db/schemas/product-variants";

export type ProductMeta = typeof productMeta.$inferSelect;

export interface ProductMetaCharacteristics {
  key: string;
  value: string;
}
