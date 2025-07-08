import express from "express";
import cors from "cors";
import pkg from "body-parser";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import winston from "winston";
import bookingsRouter from "./routes/bookings.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const { json } = pkg;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

const app = express();
app.use(helmet()); // Set security-related HTTP headers
app.use(limiter);
app.use(cors());
app.use(json());

app.use("/api/bookings", bookingsRouter);

// Error handler should be last
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = 5016;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
