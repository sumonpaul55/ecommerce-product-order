import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductDb = async (productData: TProduct) => {
  const product = Product.create(productData);
  return product;
};

export const productServices = {
  createProductDb,
};
