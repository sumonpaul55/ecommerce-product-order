import express from "express";
import { productController } from "./product.controller";

export const router = express.Router();

router.post("/products", productController.createProduct);
router.get("/products", productController.getAllProduct);
router.get("/products/:productId", productController.getProductByid);
router.put("/products/:productId", productController.findAndUpdate);
router.delete("/products/:productId", productController.deleteProduct);

export const ProductRoute = router;
