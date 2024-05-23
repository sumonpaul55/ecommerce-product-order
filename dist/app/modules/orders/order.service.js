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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = __importDefault(require("./order.model"));
const createOrderDb = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const findedProduct = yield product_model_1.Product.findById({ _id: orderData.productId });
    if (!findedProduct) {
        return "Invalid Product id";
    }
    if (orderData.quantity <= findedProduct.inventory.quantity) {
        let updatedQuantity = findedProduct.inventory.quantity - orderData.quantity;
        const updateproduct = yield product_model_1.Product.findByIdAndUpdate({ _id: orderData.productId }, { $set: { "inventory.quantity": updatedQuantity } }, { new: true });
        if (((_a = updateproduct === null || updateproduct === void 0 ? void 0 : updateproduct.inventory) === null || _a === void 0 ? void 0 : _a.quantity) == 0) {
            yield product_model_1.Product.findByIdAndUpdate({ _id: orderData.productId }, { $set: { "inventory.inStock": "false" } });
        }
        const createdOrder = yield order_model_1.default.create(orderData);
        return { success: true, message: "Order created successfully!", data: createdOrder };
    }
    return { success: false, message: "Insufficient quantity available inventory" };
});
const getOrdersdb = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (email) {
        const getOrders = yield order_model_1.default.find({ email: email });
        return getOrders;
    }
    else {
        const getOrders = yield order_model_1.default.find();
        return getOrders;
    }
});
exports.orderService = {
    createOrderDb,
    getOrdersdb,
};
