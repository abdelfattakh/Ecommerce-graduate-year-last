"use strict";
exports.__esModule = true;
var mysql_core_1 = require("drizzle-orm/mysql-core");
exports.users = mysql_core_1.mysqlTable("users", {
    id: mysql_core_1.int("id").primaryKey().autoincrement(),
    firstName: mysql_core_1.text("first_name").notNull(),
    lastName: mysql_core_1.text("last_name").notNull(),
    password: mysql_core_1.text("password").notNull(),
    phone: mysql_core_1.varchar("phone", { length: 12 }).unique().notNull(),
    createdAt: mysql_core_1.timestamp("created_at").defaultNow(),
    updatedAt: mysql_core_1.timestamp("updated_at").defaultNow().onUpdateNow(),
    email: mysql_core_1.varchar("email", { length: 40 }).unique().notNull(),
    role: mysql_core_1.text("role").$type()["default"]("customer")
});
