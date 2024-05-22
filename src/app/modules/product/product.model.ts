import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const ProductVariantsSchema = new Schema({
  type: { type: String, trim: true },
  size: { type: String, trim: true },
  _id: Boolean,
});

const InventorySchema = new Schema({
  quantity: Number,
  inStock: Boolean,
  _id: Boolean,
});

const ProductSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  tags: [{ type: String }],
  variants: [{ type: ProductVariantsSchema }],
  inventory: { type: InventorySchema },
});

export const Product = model("Product", ProductSchema);
