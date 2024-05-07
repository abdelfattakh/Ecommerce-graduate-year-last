import type { products } from "../../infrastructure/db/schemas/products";

export type Product = typeof products.$inferSelect;
