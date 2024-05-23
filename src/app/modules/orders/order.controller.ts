import { Request, Response } from "express";
import orderValidationSchema from "./order.validation";
import { orderService } from "./order.service";

// create orders
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const validateOrder = orderValidationSchema.parse(order);
    const result: any = await orderService.createOrderDb(validateOrder);
    res.status(200).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.issues.map((item: { message: unknown }) => item.message),
    });
  }
};
// get all orders
const getOrders = async (req: Request, res: Response) => {
  try {
    const { email }: any = req.query;

    const result = await orderService.getOrdersdb(email);
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result.length ? result : "Order not found",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.issues.map((item: { message: unknown }) => item.message),
    });
  }
};

export const routeController = {
  createOrder,
  getOrders,
};
