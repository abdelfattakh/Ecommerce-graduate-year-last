import type { MySql2Database } from "drizzle-orm/mysql2";
import type { CrudOperations } from "./types";
import { eq, sql } from "drizzle-orm";

import type { InsertProductDTO } from "../dto/product";
import { products } from "../../infrastructure/db/schemas/products";

export class ProductRepository implements CrudOperations<InsertProductDTO> {
  db: MySql2Database<Record<string, never>>;

  constructor(db?: MySql2Database<Record<string, never>>) {
    if (db == null) {
      throw new Error("Syntax error, should pass database instance");
    }

    this.db = db;
  }

  async get(id: number) {
    try {
      const retrievedProduct = await this.db
        .select()
        .from(products)
        .where(eq(products.id, id));

      return retrievedProduct?.[0];
    } catch (error) {
      throw new Error(`unable to retrieve product, error: ${error}`);
    }
  }

  async create(productInfo: InsertProductDTO) {
    try {
      const createdProduct = await this.db.insert(products).values(productInfo);

      return { ...productInfo, id: createdProduct?.[0].insertId };
    } catch (error) {
      throw new Error(`unable to add category, error: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      await this.db.delete(products).where(eq(products.id, id));

      return id;
    } catch (error) {
      throw new Error(`unable to delete product, error: ${error}`);
    }
  }

  async update(updatedProduct: InsertProductDTO) {
    try {
      if (updatedProduct.id != null) {
        await this.db
          .update(products)
          .set(updatedProduct)
          .where(eq(products.id, updatedProduct.id));

        return updatedProduct;
      }

      return null;
    } catch (error) {
      throw new Error(`unable to update product, error: ${error}`);
    }
  }

  async getAll() {
    try {
      const result = await this.db.select().from(products);

      console.log({ result });

      return result;
    } catch (error) {
      throw new Error(`unable to retrieve products, error: ${error}`);
    }
  }

  async getAllByCategoryId(categoryId: number) {
    try {
      const result = await this.db
        .select()
        .from(products)
        .where(eq(products.categoryId, categoryId));

      return result;
    } catch (error) {
      throw new Error(`unable to retrieve products, error: ${error}`);
    }
  }
}
