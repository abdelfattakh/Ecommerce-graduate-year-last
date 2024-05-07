"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _1 = require(".");
var category_1 = require("../../api/category");
exports.registerCategoryRoutes = function (categoryService) {
    var categoryRouter = express_1.Router();
    categoryRouter.post("/create", category_1.createCategoryHandler(categoryService));
    categoryRouter.get("/get/:id", category_1.getCategoryHandler(categoryService));
    categoryRouter.get("/getAll", category_1.getAllCategoriesHandler(categoryService));
    categoryRouter.put("/:id", category_1.updateCategoryHandler(categoryService));
    categoryRouter["delete"]("/:id", category_1.deleteCategoryHandler(categoryService));
    _1.app.use("/api/category", categoryRouter);
};
