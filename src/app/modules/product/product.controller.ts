import { Request, Response } from "express";
import productValidationSchema from "./product.validation";
import { productServices } from "./product.service";

// create a porduct
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    // after validate data from req.body
    const validatedProduct = productValidationSchema.parse(productData);
    // data sent to product service for created db
    const result = await productServices.createProductDb(validatedProduct);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.issues.map((item: { message: unknown }) => item.message),
    });
  }
};

// get all porduct
const getAllProduct = async (req: Request, res: Response) => {
  try {
    // data sent to product service for created db
    const result = await productServices.getAllPorducts();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.issues.map((item: { message: unknown }) => item.message),
    });
  }
};

// get porduct by id
const getProductByid = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productServices.getProductUsinId(id);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.issues.map((item: { message: unknown }) => item.message) || "Internal Server Error",
    });
  }
};

export const productController = {
  createProduct,
  getAllProduct,
  getProductByid,
};
