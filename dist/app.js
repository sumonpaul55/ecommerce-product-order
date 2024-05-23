"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_route_1 = require("./app/modules/product/product.route");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const order_route_1 = require("./app/modules/orders/order.route");
const app = (0, express_1.default)();
// use cors
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// application routes
app.use("/api", product_route_1.ProductRoute);
app.use("/api", order_route_1.OrderRoute);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
