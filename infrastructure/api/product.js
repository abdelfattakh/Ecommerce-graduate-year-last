"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var zod_1 = require("zod");
var product_1 = require("../validation/product");
var product_meta_1 = require("../validation/product-meta");
exports.createProductHandler = function (productService) {
    return function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var validatedProduct, characteristics, createdProduct_1, createdProduct, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validatedProduct = product_1.insertProductSchema.parse(request.body);
                    if (!(request.body.characteristics != null)) return [3 /*break*/, 2];
                    characteristics = product_meta_1.characteristicsSchema.parse(request.body.characteristics);
                    return [4 /*yield*/, productService.createProduct(validatedProduct, characteristics)];
                case 1:
                    createdProduct_1 = _a.sent();
                    return [2 /*return*/, response.status(200).json(createdProduct_1)];
                case 2: return [4 /*yield*/, productService.createProduct(validatedProduct)];
                case 3:
                    createdProduct = _a.sent();
                    return [2 /*return*/, response.status(200).json(createdProduct)];
                case 4:
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
                case 5: return [2 /*return*/];
            }
        });
    }); };
};
exports.getProductHandler = function (productService) {
    return function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var id, product, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    id = request.params.id;
                    if (!(id != null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, productService.getProduct(Number(id))];
                case 1:
                    product = _a.sent();
                    return [2 /*return*/, response.status(200).json(product)];
                case 2: return [2 /*return*/, response.status(404).json({
                        type: "validation error",
                        status: "failed",
                        message: "id is required"
                    })];
                case 3:
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
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
exports.getAllProductsHandler = function (productService) {
    return function (_, response) { return __awaiter(void 0, void 0, void 0, function () {
        var products, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, productService.getAllProducts()];
                case 1:
                    products = _a.sent();
                    return [2 /*return*/, response.status(200).json({ products: products })];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    if (error_3 instanceof zod_1.ZodError) {
                        error_3 = error_3.issues.map(function (e) { return ({
                            path: e.path[0],
                            message: e.message
                        }); });
                        return [2 /*return*/, response.status(403).json({
                                type: "validation error",
                                status: "failed",
                                message: error_3
                            })];
                    }
                    return [2 /*return*/, response.status(500).json({
                            message: error_3,
                            status: "failed",
                            type: "Internal server error"
                        })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
exports.updateProductHandler = function (productService) {
    return function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var id, validatedProduct, updatedProduct, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    id = request.params.id;
                    if (!(id != null)) return [3 /*break*/, 2];
                    validatedProduct = product_1.insertProductSchema.parse(request.body);
                    return [4 /*yield*/, productService.updateProduct(__assign(__assign({}, validatedProduct), { id: Number(id) }))];
                case 1:
                    updatedProduct = _a.sent();
                    return [2 /*return*/, response.status(200).json(updatedProduct)];
                case 2: return [2 /*return*/, response.status(404).json({
                        type: "validation error",
                        status: "failed",
                        message: "id is required"
                    })];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    if (error_4 instanceof zod_1.ZodError) {
                        error_4 = error_4.issues.map(function (e) { return ({
                            path: e.path[0],
                            message: e.message
                        }); });
                        return [2 /*return*/, response.status(403).json({
                                type: "validation error",
                                status: "failed",
                                message: error_4
                            })];
                    }
                    return [2 /*return*/, response.status(500).json({
                            message: error_4,
                            status: "failed",
                            type: "Internal server error"
                        })];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
exports.deleteProductHandler = function (productService) {
    return function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var id, product;
        return __generator(this, function (_a) {
            try {
                id = request.params.id;
                if (id != null) {
                    product = productService.deleteProduct(Number(id));
                    return [2 /*return*/, response.status(200).json(product)];
                }
                return [2 /*return*/, response.status(404).json({
                        type: "validation error",
                        status: "failed",
                        message: "id is required"
                    })];
            }
            catch (error) {
                console.error(error);
                if (error instanceof zod_1.ZodError) {
                    error = error.issues.map(function (e) { return ({
                        path: e.path[0],
                        message: e.message
                    }); });
                    return [2 /*return*/, response.status(403).json({
                            type: "validation error",
                            status: "failed",
                            message: error
                        })];
                }
                return [2 /*return*/, response.status(500).json({
                        message: error,
                        status: "failed",
                        type: "Internal server error"
                    })];
            }
            return [2 /*return*/];
        });
    }); };
};
exports.getProductsByCategoryHandler = function (productService) {
    return function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var categoryId, products, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    categoryId = request.params.categoryId;
                    if (!(categoryId != null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, productService.getAllByCategoryId(Number(categoryId))];
                case 1:
                    products = _a.sent();
                    return [2 /*return*/, response.status(200).json({ products: products })];
                case 2: return [2 /*return*/, response.status(404).json({
                        type: "validation error",
                        status: "failed",
                        message: "id is required"
                    })];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5);
                    if (error_5 instanceof zod_1.ZodError) {
                        error_5 = error_5.issues.map(function (e) { return ({
                            path: e.path[0],
                            message: e.message
                        }); });
                        return [2 /*return*/, response.status(403).json({
                                type: "validation error",
                                status: "failed",
                                message: error_5
                            })];
                    }
                    return [2 /*return*/, response.status(500).json({
                            message: error_5,
                            status: "failed",
                            type: "Internal server error"
                        })];
                case 4: return [2 /*return*/];
            }
        });
    }); };
};
