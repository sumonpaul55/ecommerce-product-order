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
exports.productController = void 0;
const product_validation_1 = __importDefault(require("./product.validation"));
const product_service_1 = require("./product.service");
// create a porduct
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        // after validate data from req.body
        const validatedProduct = product_validation_1.default.parse(productData);
        // data sent to product service for created db
        const result = yield product_service_1.productServices.createProductDb(validatedProduct);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.issues.map((item) => item.message),
        });
    }
});
// get all porduct
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // data sent to product service for created db
        const result = yield product_service_1.productServices.getAllPorducts();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.issues.map((item) => item.message),
        });
    }
});
// get porduct by id
const getProductByid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_service_1.productServices.getProductUsinId(id);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.issues.map((item) => item.message) || "Internal Server Error",
        });
    }
});
// finde product and Update
const findAndUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const validteData = product_validation_1.default.parse(req.body);
        const result = yield product_service_1.productServices.updateProductById(id, validteData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Update Failed, Internel Server error",
            error: error.issues.map((item) => item.message) || "Internal Server Error",
        });
    }
});
// product delete
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        yield product_service_1.productServices.deleteProduct(id);
        res.status(200).json({
            success: true,
            message: "Product Deleted Successully !",
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.issues.map((item) => item.message) || "Internal Server Error",
        });
    }
});
// search product
const findSearchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        console.log("something for test", searchTerm);
        if (!searchTerm || typeof searchTerm !== "string") {
            res.status(404).json({
                success: false,
                message: "searchTerm query parameter is required and should be a string",
            });
        }
        else {
            const result = yield product_service_1.productServices.searchedProduct(searchTerm);
            res.status(200).json({
                success: true,
                message: `Products matching search term ${searchTerm} fetched successfully!`,
                data: result,
            });
        }
    }
    catch (error) {
        console.log("error theke");
        res.status(500).json({
            success: false,
            message: "Something Error occured",
            error: error.issues.map((item) => item.message) || "Internal Server Error",
        });
    }
});
exports.productController = {
    createProduct,
    getAllProduct,
    getProductByid,
    findAndUpdate,
    deleteProduct,
    findSearchProduct,
};
