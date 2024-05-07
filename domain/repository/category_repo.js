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
var drizzle_orm_1 = require("drizzle-orm");
var category_1 = require("../../infrastructure/db/schemas/category");
var CategoryRepository = /** @class */ (function () {
    function CategoryRepository(db) {
        if (db == null) {
            throw new Error("Syntax error, should pass database instance");
        }
        this.db = db;
    }
    CategoryRepository.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var retrievedCategory, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db
                                .select()
                                .from(category_1.category)
                                .where(drizzle_orm_1.eq(category_1.category.id, id))];
                    case 1:
                        retrievedCategory = _a.sent();
                        return [2 /*return*/, retrievedCategory === null || retrievedCategory === void 0 ? void 0 : retrievedCategory[0]];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error("unable to retrieve category, error: " + error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoryRepository.prototype.create = function (categoryInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var createdCategory, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db
                                .insert(category_1.category)
                                .values(categoryInfo)];
                    case 1:
                        createdCategory = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, categoryInfo), { id: createdCategory === null || createdCategory === void 0 ? void 0 : createdCategory[0].insertId })];
                    case 2:
                        error_2 = _a.sent();
                        throw new Error("unable to add category, error: " + error_2);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoryRepository.prototype["delete"] = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db["delete"](category_1.category).where(drizzle_orm_1.eq(category_1.category.id, id))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, id];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error("unable to delete category, error: " + error_3);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoryRepository.prototype.update = function (updatedCategory) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!(updatedCategory.id != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.db
                                .update(category_1.category)
                                .set(updatedCategory)
                                .where(drizzle_orm_1.eq(category_1.category.id, updatedCategory.id))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, updatedCategory];
                    case 2: return [2 /*return*/, null];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error("unable to update category, error: " + error_4);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CategoryRepository.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.select().from(category_1.category)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        error_5 = _a.sent();
                        throw new Error("unable to retrieve categories, error: " + error_5);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CategoryRepository;
}());
exports.CategoryRepository = CategoryRepository;
