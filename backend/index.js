import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  esewaInitiatePayment,
  paymentStatus,
} from "./src/controllers/esewa.controller.js";

import connectDB from "./src/config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.post("/initiate-payment", esewaInitiatePayment);
app.post("/payment-status", paymentStatus);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
