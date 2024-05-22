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

// finde product and Update
const findAndUpdate = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const validteData = productValidationSchema.parse(req.body);

    const result = await productServices.updateProductById(id, validteData);
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Update Failed, Internel Server error",
      error: error.issues.map((item: { message: unknown }) => item.message) || "Internal Server Error",
    });
  }
};
// product delete
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    productServices.deleteProduct(id);
    res.status(200).json({
      success: true,
      message: "Product Deleted Successully !",
      data: null,
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
  findAndUpdate,
  deleteProduct,
};
