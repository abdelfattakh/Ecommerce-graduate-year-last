import type { MySql2Database } from "drizzle-orm/mysql2";
import type { CrudOperations } from "./types";
import { eq } from "drizzle-orm";

import type { InsertProductMetaDTO } from "../dto/product-meta";
import { productMeta } from "../../infrastructure/db/schemas/product-variants";

export class ProductMetaRepository
  implements CrudOperations<InsertProductMetaDTO | InsertProductMetaDTO[]>
{
  db: MySql2Database<Record<string, never>>;

  constructor(db?: MySql2Database<Record<string, never>>) {
    if (db == null) {
      throw new Error("Syntax error, should pass database instance");
    }

    this.db = db;
  }

  async get(id: number) {
    try {
      const retrievedProductMeta = await this.db
        .select()
        .from(productMeta)
        .where(eq(productMeta.id, id));

      return retrievedProductMeta?.[0];
    } catch (error) {
      throw new Error(`unable to retrieve product meta, error: ${error}`);
    }
  }

  async create(productMetaInfo: InsertProductMetaDTO[]) {
    try {
      const createdProduct = await this.db
        .insert(productMeta)
        .values(productMetaInfo);

      return { ...productMetaInfo, id: createdProduct?.[0].insertId };
    } catch (error) {
      throw new Error(`unable to add product meta, error: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      await this.db.delete(productMeta).where(eq(productMeta.id, id));

      return id;
    } catch (error) {
      throw new Error(`unable to delete product meta, error: ${error}`);
    }
  }

  async update(updatedProductMeta: InsertProductMetaDTO) {
    try {
      if (updatedProductMeta.id != null) {
        await this.db
          .update(productMeta)
          .set(updatedProductMeta)
          .where(eq(productMeta.id, updatedProductMeta.id));

        return updatedProductMeta;
      }

      return null;
    } catch (error) {
      throw new Error(`unable to update product, error: ${error}`);
    }
  }

  async getAll() {
    try {
      const result = await this.db.select().from(productMeta);

      return result;
    } catch (error) {
      throw new Error(`unable to retrieve products, error: ${error}`);
    }
  }

  async getAllByProductId(id: number) {
    try {
      const result = await this.db
        .select()
        .from(productMeta)
        .where(eq(productMeta.productId, id));

      return result;
    } catch (error) {
      throw new Error(`unable to retrieve products, error: ${error}`);
    }
  }
}
