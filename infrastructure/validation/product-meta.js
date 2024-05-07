"use strict";
exports.__esModule = true;
var drizzle_zod_1 = require("drizzle-zod");
var product_variants_1 = require("../db/schemas/product-variants");
var zod_1 = require("zod");
exports.selectProductMetaSchema = drizzle_zod_1.createSelectSchema(product_variants_1.productMeta);
exports.characteristicsSchema = zod_1.z
    .object({
    key: zod_1.z.string(),
    value: zod_1.z.string()
})
    .array();
exports.insertProductMetaSchema = zod_1.z.object({
    characteristics: exports.characteristicsSchema,
    productId: zod_1.z.number()
});
