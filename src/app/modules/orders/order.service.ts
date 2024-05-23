import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrderDb = async (orderData: TOrder) => {
  const findedProduct: any = await Product.findById({ _id: orderData.productId });
  if (!findedProduct) {
    return "Invalid Product id";
  }

  if (orderData.quantity <= findedProduct.inventory.quantity) {
    let updatedQuantity = findedProduct.inventory.quantity - orderData.quantity;
    const updateproduct = await Product.findByIdAndUpdate(
      { _id: orderData.productId },
      { $set: { "inventory.quantity": updatedQuantity } },
      { new: true }
    );

    if (updateproduct?.inventory?.quantity == 0) {
      await Product.findByIdAndUpdate({ _id: orderData.productId }, { $set: { "inventory.inStock": "false" } });
    }

    const createdOrder = await Order.create(orderData);
    return { success: true, message: "Order created successfully!", data: createdOrder };
  }
  return { success: false, message: "Insufficient quantity available inventory" };
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
