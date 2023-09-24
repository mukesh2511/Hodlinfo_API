import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import tradeRoute from "./routes/tradeRoute.js";
import cors from "cors";
const app = express();
dotenv.config();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

const connect = async () => {
  await mongoose.connect(process.env.MONGO);
  console.log("Connexted to MongoDB");
};

app.use("/api/trade", tradeRoute);

app.use((err, req, res, next) => {
  const message = err.message || "something went wrong";
  const status = err.status || 500;
  return res.status(status).send(message);
});

app.listen(5000, () => {
  connect();
  console.log("server is running");
});
