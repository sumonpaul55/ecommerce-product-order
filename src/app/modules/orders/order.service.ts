import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrderDb = async (orderData: TOrder) => {
  const createdOrder = await Order.create(orderData);
  return createdOrder;
};

const getOrdersdb = async (email?: string) => {
  if (email) {
    const getOrders = await Order.find({ email: email });
    return getOrders;
  } else {
    const getOrders = await Order.find();
    return getOrders;
  }
};

export const orderService = {
  createOrderDb,
  getOrdersdb,
};
