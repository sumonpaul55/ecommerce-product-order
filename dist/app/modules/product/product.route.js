"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = exports.router = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
exports.router = express_1.default.Router();
exports.router.post("/products", product_controller_1.productController.createProduct);
exports.router.get("/products", product_controller_1.productController.getAllProduct);
exports.router.get("/products/:productId", product_controller_1.productController.getProductByid);
exports.router.put("/products/:productId", product_controller_1.productController.findAndUpdate);
exports.router.delete("/products/:productId", product_controller_1.productController.deleteProduct);
exports.router.get("/products", product_controller_1.productController.findSearchProduct);
exports.ProductRoute = exports.router;
