import express from "express";
import cors from "cors";
import pkg from "body-parser";
import helmet from "helmet";
import winston from "winston";
import bookingsRouter from "./routes/bookings.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(helmet()); // Set security-related HTTP headers
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local frontend
    ],
  })
);
const { json } = pkg;
app.use(json());

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

app.use("/api/bookings", bookingsRouter);

const PORT = process.env.PORT || 5016;
app.listen(PORT, () => {
    console.log(`Server running on https://daniels-place-api.onrender.com`);
});
