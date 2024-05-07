import { ZodError } from "zod";
import type { Handler } from "express";
import type { ProductsService } from "../../domain/services/products_service";
import { insertProductSchema } from "../validation/product";
import { characteristicsSchema } from "../validation/product-meta";

export const createProductHandler =
  (productService: ProductsService): Handler =>
  async (request, response) => {
    try {
      const validatedProduct = insertProductSchema.parse(request.body);
      if (request.body.characteristics != null) {
        const characteristics = characteristicsSchema.parse(
          request.body.characteristics
        );

        const createdProduct = await productService.createProduct(
          validatedProduct,
          characteristics
        );

        return response.status(200).json(createdProduct);
      }

      const createdProduct = await productService.createProduct(
        validatedProduct
      );

      return response.status(200).json(createdProduct);
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

export const getProductHandler =
  (productService: ProductsService): Handler =>
  async (request, response) => {
    try {
      const { id } = request.params;

      if (id != null) {
        const product = await productService.getProduct(Number(id));

        return response.status(200).json(product);
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

export const getAllProductsHandler =
  (productService: ProductsService): Handler =>
  async (_, response) => {
    try {
      const products = await productService.getAllProducts();

      return response.status(200).json({ products });
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

export const updateProductHandler =
  (productService: ProductsService): Handler =>
  async (request, response) => {
    try {
      const { id } = request.params;

      if (id != null) {
        const validatedProduct = insertProductSchema.parse(request.body);
        const updatedProduct = await productService.updateProduct({
          ...validatedProduct,
          id: Number(id),
        });

        return response.status(200).json(updatedProduct);
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

export const deleteProductHandler =
  (productService: ProductsService): Handler =>
  async (request, response) => {
    try {
      const { id } = request.params;

      if (id != null) {
        const product = productService.deleteProduct(Number(id));

        return response.status(200).json(product);
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

export const getProductsByCategoryHandler =
  (productService: ProductsService): Handler =>
  async (request, response) => {
    try {
      const { categoryId } = request.params;

      if (categoryId != null) {
        const products = await productService.getAllByCategoryId(
          Number(categoryId)
        );

        return response.status(200).json({ products });
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
