import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const ProductVariantsSchema = new Schema({
  type: String,
  size: String,
});

const InventorySchema = new Schema({
  quantity: Number,
  inStock: Boolean,
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
