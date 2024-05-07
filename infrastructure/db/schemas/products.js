"use strict";
exports.__esModule = true;
var mysql_core_1 = require("drizzle-orm/mysql-core");
var category_1 = require("./category");
exports.products = mysql_core_1.mysqlTable("products", {
    id: mysql_core_1.int("id").primaryKey().autoincrement(),
    productName: mysql_core_1.varchar("product_name", { length: 50 }).notNull().unique(),
    description: mysql_core_1.varchar("description", { length: 256 }).notNull(),
    firstPrice: mysql_core_1.decimal("first_price").notNull(),
    currentPrice: mysql_core_1.decimal("current_price").notNull(),
    discount: mysql_core_1.int("discount"),
    previewImageLink: mysql_core_1.text("preview_image_link"),
    rating: mysql_core_1.decimal("rating"),
    categoryId: mysql_core_1.int("category_id").references(function () { return category_1.category.id; })
});
