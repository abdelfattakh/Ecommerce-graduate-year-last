import { Router } from "express";
import { app } from ".";
import type { ProductsService } from "../../../domain/services/products_service";
import {
  createProductHandler,
  deleteProductHandler,
  getAllProductsHandler,
  getProductHandler,
  getProductsByCategoryHandler,
  updateProductHandler,
} from "../../api/product";

export const registerProductRoutes = (productService: ProductsService) => {
  const productRouter = Router();

  productRouter.get("/getAllProducts", getAllProductsHandler(productService));
  productRouter.post("/create", createProductHandler(productService));
  productRouter.put("/update", updateProductHandler(productService));
  productRouter.get("/:id", getProductHandler(productService));
  productRouter.delete("/:id", deleteProductHandler(productService));
  productRouter.get(
    "/getAll/:categoryId",
    getProductsByCategoryHandler(productService)
  );

  app.use("/api/product", productRouter);
};
