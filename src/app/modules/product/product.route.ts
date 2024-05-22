import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/products", productController.createProduct);

export const ProductRoute = router;
