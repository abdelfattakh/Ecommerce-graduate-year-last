import type { InsertCategoryDTO } from "../dto/category";
import type { CategoryRepository } from "../repository/category_repo";
import type { CategoryServiceOperations } from "./types";

export class CategoryService implements CategoryServiceOperations {
  private categoryRepo: CategoryRepository;

  constructor(categoryRepo: CategoryRepository) {
    this.categoryRepo = categoryRepo;
  }

  async createCategory(category: InsertCategoryDTO) {
    const createdCategory = await this.categoryRepo.create(category);

    return createdCategory;
  }

  async getCategory(id: number) {
    const category = await this.categoryRepo.get(id);

    return category;
  }

  async updateCategory(categoryInfo: InsertCategoryDTO) {
    const category = await this.categoryRepo.update(categoryInfo);

    return category;
  }

  async getAllCategories() {
    const categories = await this.categoryRepo.getAll();

    return categories;
  }

  async deleteCategory(id: number) {
    const category = await this.categoryRepo.delete(id);
    console.log({ category });
    return category;
  }
}
