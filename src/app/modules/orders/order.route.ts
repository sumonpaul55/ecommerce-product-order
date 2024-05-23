import express from "express";
import { routeController } from "./order.controller";

const router = express.Router();

router.post("/orders", routeController.createOrder);

export const OrderRoute = router;
