"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define the Inventory validation
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number().min(0, "Quantity must be a non-negative number"),
    inStock: zod_1.z.boolean(),
});
// Define the Product Variants validation
const productVariantValidationSchema = zod_1.z.object({
    type: zod_1.z.string().min(1, "Size is required"),
    size: zod_1.z.string().min(1, "Color is a required field"),
});
// Define the main product validation
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    description: zod_1.z.string().min(1, "Description is required"),
    price: zod_1.z.number().min(0, "Price must be a non-negative number"),
    category: zod_1.z.string().min(1, "Category is required"),
    tags: zod_1.z.array(zod_1.z.string()).default([]),
    variants: zod_1.z.array(productVariantValidationSchema).default([]),
    inventory: inventoryValidationSchema,
});
exports.default = productValidationSchema;
