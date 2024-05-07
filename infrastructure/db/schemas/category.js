"use strict";
exports.__esModule = true;
var mysql_core_1 = require("drizzle-orm/mysql-core");
exports.category = mysql_core_1.mysqlTable("category", {
    id: mysql_core_1.int("id").primaryKey().autoincrement(),
    categoryName: mysql_core_1.varchar("category_name", { length: 40 }).notNull().unique(),
    previewImageLink: mysql_core_1.text("preview_image_link").notNull()
});
