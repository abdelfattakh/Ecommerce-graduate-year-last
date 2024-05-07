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
exports.__esModule = true;
var product_meta_1 = require("../../infrastructure/validation/product-meta");
exports.toProductMeta = function (characteristics, id) {
    var validatedProductMeta = product_meta_1.insertProductMetaSchema.parse({
        characteristics: characteristics,
        productId: id
    });
    var addedData = validatedProductMeta.characteristics.map(function (characteristic) { return (__assign(__assign({}, characteristic), { productId: id })); });
    return addedData;
};
