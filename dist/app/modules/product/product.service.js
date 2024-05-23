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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const product_model_1 = require("./product.model");
// create product
const createProductDb = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.create(productData);
    return product;
});
// get all product
const getAllPorducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        const Searchedproducts = yield product_model_1.Product.find({
            $or: [{ name: { $regex: searchTerm } }, { category: { $regex: searchTerm } }],
        });
        return Searchedproducts;
    }
    else {
        const product = yield product_model_1.Product.find();
        return product;
    }
});
// get one product using id
const getProductUsinId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findById(id);
    return product;
});
// find one and update Product
const updateProductById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedData = yield product_model_1.Product.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
        upsert: true,
    });
    return updatedData;
});
// delete producct
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const productDeleted = yield product_model_1.Product.findByIdAndDelete(id);
    return productDeleted;
});
exports.productServices = {
    createProductDb,
    getAllPorducts,
    getProductUsinId,
    updateProductById,
    deleteProduct,
};
