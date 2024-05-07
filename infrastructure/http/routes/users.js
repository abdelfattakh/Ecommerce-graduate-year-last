"use strict";
exports.__esModule = true;
var express_1 = require("express");
var _1 = require(".");
var users_1 = require("../../api/users");
exports.registerUserRoutes = function (userService) {
    var userRouter = express_1.Router();
    userRouter.post("/register", users_1.registerUserHandler(userService));
    userRouter.post("/login", users_1.loginUserHandler(userService));
    userRouter.get("/user", users_1.getUserHandler(userService));
    userRouter.get("/logout");
    _1.app.use("/api/auth", userRouter);
};
