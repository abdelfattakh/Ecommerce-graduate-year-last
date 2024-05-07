"use strict";
exports.__esModule = true;
var drizzle_zod_1 = require("drizzle-zod");
var user_1 = require("../db/schemas/user");
exports.insertUserSchema = drizzle_zod_1.createInsertSchema(user_1.users);
exports.selectUserSchema = drizzle_zod_1.createSelectSchema(user_1.users);
exports.userRegisterRequestSchema = exports.insertUserSchema.pick({
    firstName: true,
    email: true,
    lastName: true,
    password: true,
    phone: true,
    id: true
});
exports.userLoginRequestSchema = exports.selectUserSchema.pick({
    email: true,
    password: true
});
