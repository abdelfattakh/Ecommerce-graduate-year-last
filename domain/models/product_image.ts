import type { productImages } from "../../infrastructure/db/schemas/products-images";

export type ProductImage = typeof productImages.$inferSelect;
