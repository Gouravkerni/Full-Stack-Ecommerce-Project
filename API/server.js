import express from "express";
import mongoose from "mongoose";
import userRoute from "./Routes/userRoute.js";
import productRoute from "./Routes/productRoute.js";
import cartRoute from "./Routes/cartRoute.js";
import addressRoute from "./Routes/addressRoute.js";
import cors from "cors";
import paymentRouter from "./Routes/paymentRoutes.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect(
    process.env.MONGODB_URI,
    {
      dbName: "Ecommerce_FullStack",
    }
  )
  .then(() => console.log("DB Connected..."))
  .catch((err) => console.log(err));

app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/address", addressRoute);
app.use("/api/payment" , paymentRouter);

const port = 2000;

app.listen(port, () => console.log(`Server is running at port ${port}`));
