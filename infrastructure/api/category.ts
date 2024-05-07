import { ZodError } from "zod";
import type { Handler } from "express";
import { insertCategorySchema } from "../validation/category";
import type { CategoryService } from "../../domain/services/category_service";

export const createCategoryHandler =
  (categoryService: CategoryService): Handler =>
  async (request, response) => {
    try {
      const validatedCategory = insertCategorySchema.parse(request.body);
      const createdCategory = await categoryService.createCategory(
        validatedCategory
      );

      return response.status(200).json(createdCategory);
    } catch (error) {
      console.error(error);
      if (error instanceof ZodError) {
        error = error.issues.map((e) => ({
          path: e.path[0],
          message: e.message,
        }));

        return response.status(403).json({
          type: "validation error",
          status: "failed",
          message: error,
        });
      }

      return response.status(500).json({
        message: error,
        status: "failed",
        type: "Internal server error",
      });
    }
  };

export const getCategoryHandler =
  (categoryService: CategoryService): Handler =>
  async (request, response) => {
    try {
      const { id } = request.params;

      if (id != null) {
        const category = await categoryService.getCategory(Number(id));

        return response.status(200).json(category);
      }

      return response.status(404).json({
        type: "validation error",
        status: "failed",
        message: "id is required",
      });
    } catch (error) {
      console.error(error);
      if (error instanceof ZodError) {
        error = error.issues.map((e) => ({
          path: e.path[0],
          message: e.message,
        }));

        return response.status(403).json({
          type: "validation error",
          status: "failed",
          message: error,
        });
      }

      return response.status(500).json({
        message: error,
        status: "failed",
        type: "Internal server error",
      });
    }
  };

export const getAllCategoriesHandler =
  (categoryService: CategoryService): Handler =>
  async (_, response) => {
    try {
      const categories = await categoryService.getAllCategories();

      return response.status(200).json({ categories });
    } catch (error) {
      console.error(error);
      if (error instanceof ZodError) {
        error = error.issues.map((e) => ({
          path: e.path[0],
          message: e.message,
        }));

        return response.status(403).json({
          type: "validation error",
          status: "failed",
          message: error,
        });
      }

      return response.status(500).json({
        message: error,
        status: "failed",
        type: "Internal server error",
      });
    }
  };

export const updateCategoryHandler =
  (categoryService: CategoryService): Handler =>
  async (request, response) => {
    try {
      const { id } = request.params;

      if (id != null) {
        const validatedCategory = insertCategorySchema.parse(request.body);
        const updatedCategory = await categoryService.updateCategory({
          ...validatedCategory,
          id: Number(id),
        });

        return response.status(200).json(updatedCategory);
      }

      return response.status(404).json({
        type: "validation error",
        status: "failed",
        message: "id is required",
      });
    } catch (error) {
      console.error(error);
      if (error instanceof ZodError) {
        error = error.issues.map((e) => ({
          path: e.path[0],
          message: e.message,
        }));

        return response.status(403).json({
          type: "validation error",
          status: "failed",
          message: error,
        });
      }

      return response.status(500).json({
        message: error,
        status: "failed",
        type: "Internal server error",
      });
    }
  };

export const deleteCategoryHandler =
  (categoryService: CategoryService): Handler =>
  async (request, response) => {
    try {
      const { id } = request.params;
      if (id != null) {
        const deletedCatgeory = await categoryService.deleteCategory(
          Number(id)
        );

        return response.status(200).json(deletedCatgeory);
      }
      return response.status(404).json({
        type: "validation error",
        status: "failed",
        message: "id is required",
      });
    } catch (error) {
      console.error(error);

      if (error instanceof ZodError) {
        error = error.issues.map((e) => ({
          path: e.path[0],
          message: e.message,
        }));

        return response.status(403).json({
          type: "validation error",
          status: "failed",
          message: error,
        });
      }

      return response.status(500).json({
        message: error,
        status: "failed",
        type: "Internal server error",
      });
    }
  };
