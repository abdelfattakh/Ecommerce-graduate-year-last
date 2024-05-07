import type { InsertCategoryDTO } from "../dto/category";
import type { InsertProductDTO } from "../dto/product";
import type { InsertUserDTO } from "../dto/users";
import type { ProductMetaCharacteristics } from "../models/product_meta";

export interface UserServiceOperations {
  registerUser(user: InsertUserDTO): Promise<InsertUserDTO | null>;
  getUser(id: number): Promise<InsertUserDTO | null>;
  updateUser(user: InsertUserDTO): Promise<InsertUserDTO | null>;
}

export interface CategoryServiceOperations {
  createCategory(
    category: InsertCategoryDTO
  ): Promise<InsertCategoryDTO | null>;
  getCategory(id: number): Promise<InsertCategoryDTO | null>;
  getAllCategories(): Promise<InsertCategoryDTO[] | null>;
}

export interface ProductsServiceOperations {
  createProduct(
    product: InsertProductDTO,
    characteristics?: ProductMetaCharacteristics[]
  ): Promise<InsertProductDTO | null>;
  getProduct(id: number): Promise<InsertProductDTO | null>;
  getAllByCategoryId(categoryId: number): Promise<InsertProductDTO[] | null>;
  getAllProducts(): Promise<InsertProductDTO[] | null>;
  updateProduct(product: InsertProductDTO): Promise<InsertProductDTO | null>;
}
