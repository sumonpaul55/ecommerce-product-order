import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const ProductVariantsSchema = new Schema({
  type: String,
  size: String,
  _id: Boolean,
});

const InventorySchema = new Schema({
  quantity: Number,
  inStock: Boolean,
  _id: Boolean,
});

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  variants: [{ type: ProductVariantsSchema }],
  inventory: { type: InventorySchema },
});

export const Product = model("Product", ProductSchema);
