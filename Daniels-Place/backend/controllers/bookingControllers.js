import axios from "axios";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
import Booking from "../models/Booking.js";

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY; // Replace with your real Paystack secret key

export const createBooking = async (req, res) => {
  const { firstName, lastName, email, phone, address, date, time } = req.body;

  // Basic validation
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !address ||
    !date ||
    !time
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }
  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email address." });
  }
  // Phone validation
  if (!/^\d{10,15}$/.test(phone.replace(/\D/g, ""))) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid phone number." });
  }

  try {
    const booking = new Booking({
      firstName,
      lastName,
      email,
      phone,
      address,
      date,
      time,
    });
    await booking.save();
    res.json({ success: true, booking });
  } catch (err) {
    // Log the full error object, not just err.message
    console.error("Booking save error:", err);
    res
      .status(500)
      .json({ success: false, message: "Database error", error: err.message });
  }
};

export const generatePaymentLink = async (req, res) => {
  const { email, amount } = req.body;
  const booking = await Booking.findOne({ email, confirmed: false });
  if (!booking)
    return res
      .status(404)
      .json({ success: false, message: "Booking not found" });

  try {
    const paystackRes = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email,
        amount: amount * 100, // amount in kobo
        callback_url: 'localhost:5173/payment-success', // Replace with your frontend URL
        metadata: {
          custom_fields: [
            {
              display_name: "Name",
              variable_name: "name",
              value: `${booking.firstName} ${booking.lastName}`,
            },
            {
              display_name: "Phone",
              variable_name: "phone",
              value: booking.phone,
            },
            {
              display_name: "Address",
              variable_name: "address",
              value: booking.address,
            },
            {
              display_name: "Date",
              variable_name: "date",
              value: booking.date,
            },
            {
              display_name: "Time",
              variable_name: "time",
              value: booking.time,
            },
          ],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.json({
      success: true,
      paymentUrl: paystackRes.data.data.authorization_url,
    });
  } catch (err) {
    console.error("Paystack error:", err.response?.data || err.message);
    res
      .status(500)
      .json({ success: false, message: "Paystack error", error: err.message });
  }
};

// Add to bookingControllers.js
export const confirmBooking = async (req, res) => {
  const { reference } = req.body;

  try {
    const verifyRes = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const data = verifyRes.data;
    if (data.status && data.data.status === "success") {
      const email = data.data.customer.email;

      const booking = await Booking.findOneAndUpdate(
        { email, confirmed: false },
        {
          confirmed: true,
          paymentReference: reference,
        },
        { new: true }
      );

      if (!booking) {
        return res
          .status(404)
          .json({ success: false, message: "Booking not found" });
      }

      // Send email
      const transporter = nodemailer.createTransport({
        service: "gmail", // Or your email service
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Your Brand" <${process.env.EMAIL_USER}>`,
        to: booking.email,
        subject: "Booking Confirmed!",
        html: `<p>Hello ${booking.firstName},</p>
          <p>Your booking for ${booking.date} at ${
          booking.time?.label || booking.time
        } has been confirmed. See you then!</p>`,
      });

      return res.json({
        success: true,
        message: "Payment verified and booking confirmed",
        booking,
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Payment not successful" });
    }
  } catch (err) {
    console.error("Verification error:", err.response?.data || err.message);
    res.status(500).json({ success: false, message: "Verification failed" });
  }
};


