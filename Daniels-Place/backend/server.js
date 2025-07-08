import express from "express";
import cors from "cors";
import pkg from "body-parser";
import bodyParser from "body-parser";
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

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

const app = express();
app.use(helmet()); // Set security-related HTTP headers

app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local frontend
    ],
  })
);
app.use(json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/bookings", bookingsRouter);
// Webhook endpoint
app.post("/api/paystack/webhook", async (req, res) => {
  const event = req.body;
  console.log("Webhook event:", event); // Debug

  if (event.event === "charge.success") {
    const reference = event.data.reference;
    try {
      // Verify payment (optional, since Paystack already confirmed)
      const response = await axios.get(
        `https://api.paystack.co/transaction/verify/${reference}`,
        { headers: { Authorization: `Bearer ${PAYSTACK_SECRET_KEY}` } }
      );

      if (response.data.data.status === "success") {
        // Update booking and send email (use confirmBooking logic)
        await Booking.findOneAndUpdate(
          { email: response.data.data.customer.email },
          { confirmed: true, paymentReference: reference }
        );
        console.log("Booking confirmed:", reference);
      }
    } catch (err) {
      console.error("Webhook error:", err);
    }
  }
  res.sendStatus(200); // Always respond to Paystack
});

const PORT = 5016;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
