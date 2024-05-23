"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    productId: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid product ID"),
    price: zod_1.z.number().min(0),
    quantity: zod_1.z.number().min(1),
});
exports.default = orderValidationSchema;
