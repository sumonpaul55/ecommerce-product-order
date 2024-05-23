import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrderDb = async (orderData: TOrder) => {
  const createdOrder = await Order.create(orderData);
  return createdOrder;
};

export const orderService = {
  createOrderDb,
};
