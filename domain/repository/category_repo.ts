import type { MySql2Database } from "drizzle-orm/mysql2";
import type { CrudOperations } from "./types";
import { eq } from "drizzle-orm";

import { category } from "../../infrastructure/db/schemas/category";
import type { InsertCategoryDTO } from "../dto/category";

export class CategoryRepository implements CrudOperations<InsertCategoryDTO> {
  db: MySql2Database<Record<string, never>>;

  constructor(db?: MySql2Database<Record<string, never>>) {
    if (db == null) {
      throw new Error("Syntax error, should pass database instance");
    }

    this.db = db;
  }

  async get(id: number) {
    try {
      const retrievedCategory = await this.db
        .select()
        .from(category)
        .where(eq(category.id, id));

      return retrievedCategory?.[0];
    } catch (error) {
      throw new Error(`unable to retrieve category, error: ${error}`);
    }
  }

  async create(categoryInfo: InsertCategoryDTO) {
    try {
      const createdCategory = await this.db
        .insert(category)
        .values(categoryInfo);

      return { ...categoryInfo, id: createdCategory?.[0].insertId };
    } catch (error) {
      throw new Error(`unable to add category, error: ${error}`);
    }
  }

  async delete(id: number) {
    try {
      await this.db.delete(category).where(eq(category.id, id));

      return id;
    } catch (error) {
      throw new Error(`unable to delete category, error: ${error}`);
    }
  }

  async update(updatedCategory: InsertCategoryDTO) {
    try {
      if (updatedCategory.id != null) {
        await this.db
          .update(category)
          .set(updatedCategory)
          .where(eq(category.id, updatedCategory.id));

        return updatedCategory;
      }

      return null;
    } catch (error) {
      throw new Error(`unable to update category, error: ${error}`);
    }
  }

  async getAll() {
    try {
      const result = await this.db.select().from(category);

      return result;
    } catch (error) {
      throw new Error(`unable to retrieve categories, error: ${error}`);
    }
  }
}
