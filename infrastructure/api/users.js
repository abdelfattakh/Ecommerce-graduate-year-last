"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var users_1 = require("../validation/users");
var zod_1 = require("zod");
var toUser_1 = require("../../utils/users/toUser");
exports.registerUserHandler = function (userService) {
    return function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var user, registeredUser, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    user = users_1.userRegisterRequestSchema.parse(request.body);
                    return [4 /*yield*/, userService.registerUser(user)];
                case 1:
                    registeredUser = _a.sent();
                    //@ts-ignore
                    return [2 /*return*/, response.status(200).json(toUser_1.toUser(registeredUser))];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    if (error_1 instanceof zod_1.ZodError) {
                        error_1 = error_1.issues.map(function (e) { return ({
                            path: e.path[0],
                            message: e.message
                        }); });
                        return [2 /*return*/, response.status(403).json({
                                type: "validation error",
                                status: "failed",
                                message: error_1
                            })];
                    }
                    return [2 /*return*/, response.status(500).json({
                            message: error_1,
                            status: "failed",
                            type: "Internal server error"
                        })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
exports.loginUserHandler = function (userService) {
    return function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var loginData, userData, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    loginData = users_1.userLoginRequestSchema.parse(request.body);
                    return [4 /*yield*/, userService.loginUser(loginData.email, loginData.password)];
                case 1:
                    userData = _a.sent();
                    return [2 /*return*/, response.status(200).json(toUser_1.toUser(userData))];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    if (error_2 instanceof zod_1.ZodError) {
                        error_2 = error_2.issues.map(function (e) { return ({
                            path: e.path[0],
                            message: e.message
                        }); });
                        return [2 /*return*/, response.status(403).json({
                                type: "validation error",
                                status: "failed",
                                message: error_2
                            })];
                    }
                    return [2 /*return*/, response.status(500).json({
                            message: error_2,
                            status: "failed",
                            type: "Internal server error"
                        })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
exports.getUserHandler = function (userService) {
    return function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var userId, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = request.headers.authorization;
                    if (!userId) {
                        return [2 /*return*/, response.status(404).json({
                                type: "validation error",
                                status: "failed",
                                message: "user not found"
                            })];
                    }
                    return [4 /*yield*/, userService.getUser(Number(userId))];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, response.status(200).json(toUser_1.toUser(user))];
            }
        });
    }); };
};
