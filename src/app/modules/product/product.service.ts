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
// find one and update Product
const updateProductById = async (id: string, data: TProduct) => {
  const updatedData = await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    upsert: true,
  });
  return updatedData;
};

// delete producct
const deleteProduct = async (id: string) => {
  const productDeleted = await Product.findByIdAndDelete(id);
  return productDeleted;
};
// find product using search term
const searchedProduct = async (searchTerm: string) => {
  const searchedText = new RegExp(searchTerm, "i");

  const products = await Product.find({
    $or: [{ name: searchedText }, { category: searchTerm }],
  });
  return products;
};

export const productServices = {
  createProductDb,
  getAllPorducts,
  getProductUsinId,
  updateProductById,
  deleteProduct,
  searchedProduct,
};
