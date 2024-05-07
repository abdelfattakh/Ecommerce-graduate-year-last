import type { MySql2Database } from "drizzle-orm/mysql2";
import type { CrudOperations } from "./types";
import { eq } from "drizzle-orm";

import type { InsertProductMetaDTO } from "../dto/product-meta";
import { productMeta } from "../../infrastructure/db/schemas/product-variants";
import type { InsertProductImageDTO } from "../dto/product_image";
import { productImages } from "../../infrastructure/db/schemas/products-images";

export class ProductMetaRepository
  implements CrudOperations<InsertProductImageDTO>
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
      const retrievedProductImage = await this.db
        .select()
        .from(productImages)
        .where(eq(productImages.id, id));

      return retrievedProductImage?.[0];
    } catch (error) {
      throw new Error(`unable to retrieve product meta, error: ${error}`);
    }
  }

  async create(productImageInfo: InsertProductImageDTO) {
    try {
      const createdProductImage = await this.db
        .insert(productImages)
        .values(productImageInfo);

      return { ...productImageInfo, id: createdProductImage?.[0].insertId };
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

  async update(updatedProductImage: InsertProductImageDTO) {
    try {
      if (updatedProductImage.id != null) {
        await this.db
          .update(productImages)
          .set(updatedProductImage)
          .where(eq(productMeta.id, updatedProductImage.id));

        return updatedProductImage;
      }

      return null;
    } catch (error) {
      throw new Error(`unable to update product, error: ${error}`);
    }
  }

  async getAll() {
    try {
      const result = await this.db.select().from(productImages);

      return result;
    } catch (error) {
      throw new Error(`unable to retrieve products, error: ${error}`);
    }
  }

  async getAllByProductId(id: number) {
    try {
      const result = await this.db
        .select()
        .from(productImages)
        .where(eq(productImages.productId, id));

      return result;
    } catch (error) {
      throw new Error(`unable to retrieve products, error: ${error}`);
    }
  }
}
