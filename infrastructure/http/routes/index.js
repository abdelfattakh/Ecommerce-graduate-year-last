"use strict";
exports.__esModule = true;
var body_parser_1 = require("body-parser");
var express_1 = require("express");
var cors_1 = require("cors");
exports.app = express_1["default"]();
exports.app.use(body_parser_1["default"].urlencoded());
exports.app.use(body_parser_1["default"].json());
exports.app.use(cors_1["default"]());
