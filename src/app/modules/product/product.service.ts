import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductDb = async (productData: TProduct) => {
  const product = Product.create(productData);
  return product;
};
const getPorducts = async () => {
  const product = Product.find();
  return product;
};
export const productServices = {
  createProductDb,
  getPorducts,
};
