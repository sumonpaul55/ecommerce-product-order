import { ProductRoute } from "./app/modules/product/product.route";
import express, { Request, Response } from "express";
import cors from "cors";
import { OrderRoute } from "./app/modules/orders/order.route";
const app = express();
// use cors
app.use(cors());
app.use(express.json());

// application routes

app.use("/api", ProductRoute);
app.use("/api", OrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
