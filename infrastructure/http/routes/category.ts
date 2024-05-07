import { Router } from "express";
import { app } from ".";
import type { CategoryService } from "../../../domain/services/category_service";
import {
  createCategoryHandler,
  deleteCategoryHandler,
  getAllCategoriesHandler,
  getCategoryHandler,
  updateCategoryHandler,
} from "../../api/category";

export const registerCategoryRoutes = (categoryService: CategoryService) => {
  const categoryRouter = Router();

  categoryRouter.post("/create", createCategoryHandler(categoryService));
  categoryRouter.get("/get/:id", getCategoryHandler(categoryService));
  categoryRouter.get("/getAll", getAllCategoriesHandler(categoryService));
  categoryRouter.put("/:id", updateCategoryHandler(categoryService));
  categoryRouter.delete("/:id", deleteCategoryHandler(categoryService));
  app.use("/api/category", categoryRouter);
};
