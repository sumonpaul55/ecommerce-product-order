import express from "express";
import { routeController } from "./order.controller";

const router = express.Router();

router.post("/orders", routeController.createOrder);
router.get("/orders", routeController.getOrders);

export const OrderRoute = router;
