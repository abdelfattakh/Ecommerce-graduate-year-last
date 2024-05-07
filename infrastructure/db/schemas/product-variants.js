"use strict";
exports.__esModule = true;
var mysql_core_1 = require("drizzle-orm/mysql-core");
var products_1 = require("./products");
exports.productMeta = mysql_core_1.mysqlTable("product-meta", {
    id: mysql_core_1.int("id").primaryKey().autoincrement(),
    productId: mysql_core_1.int("productId")
        .references(function () { return products_1.products.id; })
        .notNull(),
    key: mysql_core_1.text("key").notNull(),
    value: mysql_core_1.text("value").notNull()
});
