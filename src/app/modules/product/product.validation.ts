import { z } from "zod";

// Define the Inventory validation
const inventoryValidationSchema = z.object({
  quantity: z.number().min(0, "Quantity must be a non-negative number"),
  inStock: z.boolean(),
});

// Define the Product Variants validation
const productVariantValidationSchema = z.object({
  type: z.string().min(1, "Size is required"),
  size: z.string().min(1, "Color is a required field"),
});

// Define the main product validation
const productValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be a non-negative number"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).default([]),
  variants: z.array(productVariantValidationSchema).default([]),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
