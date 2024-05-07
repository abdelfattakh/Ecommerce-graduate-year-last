import type { products } from "../../infrastructure/db/schemas/products";

export type InsertProductDTO = typeof products.$inferInsert;
