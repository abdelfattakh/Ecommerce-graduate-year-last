"use strict";
exports.__esModule = true;
var drizzle_zod_1 = require("drizzle-zod");
var category_1 = require("../db/schemas/category");
exports.insertCategorySchema = drizzle_zod_1.createInsertSchema(category_1.category);
exports.selectCategorySchema = drizzle_zod_1.createSelectSchema(category_1.category);
