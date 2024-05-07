"use strict";
exports.__esModule = true;
var drizzle_zod_1 = require("drizzle-zod");
var products_1 = require("../db/schemas/products");
var zod_1 = require("zod");
exports.insertProductSchema = drizzle_zod_1.createInsertSchema(products_1.products, {
    previewImageLink: zod_1.z.string().url()
});
exports.selectProductSchema = drizzle_zod_1.createSelectSchema(products_1.products);
