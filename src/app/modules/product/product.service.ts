import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// create product
const createProductDb = async (productData: TProduct) => {
  const product = await Product.create(productData);
  return product;
};
// get all product
const getAllPorducts = async () => {
  const product = await Product.find();
  return product;
};

// get one product using id
const getProductUsinId = async (id: string) => {
  const product = await Product.findById(id);
  return product;
};

export const productServices = {
  createProductDb,
  getAllPorducts,
  getProductUsinId,
};
