"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _1 = require(".");
var product_1 = require("../../api/product");
exports.registerProductRoutes = function (productService) {
    var productRouter = express_1.Router();
    productRouter.get("/getAllProducts", product_1.getAllProductsHandler(productService));
    productRouter.post("/create", product_1.createProductHandler(productService));
    productRouter.put("/update", product_1.updateProductHandler(productService));
    productRouter.get("/:id", product_1.getProductHandler(productService));
    productRouter["delete"]("/:id", product_1.deleteProductHandler(productService));
    productRouter.get("/getAll/:categoryId", product_1.getProductsByCategoryHandler(productService));
    _1.app.use("/api/product", productRouter);
};
