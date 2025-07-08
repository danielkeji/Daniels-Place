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

export const confirmBooking = async (req, res) => {
  const { reference } = req.body;

  try {
    // Verify payment with Paystack
    const paystackRes = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    if (paystackRes.data.data.status !== "success") {
      return res
        .status(400)
        .json({ success: false, message: "Payment failed" });
    }

    // Update booking in database
    const booking = await Booking.findOneAndUpdate(
      { email: paystackRes.data.data.customer.email },
      { confirmed: true, paymentReference: reference },
      { new: true }
    );

    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }

    // Send confirmation email (using Nodemailer)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: booking.email,
      subject: "Booking Confirmed!",
      html: `
        <h1>Your booking is confirmed!</h1>
        <p>Date: ${booking.date}</p>
        <p>Time: ${booking.time}</p>
        <p>Address: ${booking.address}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, booking });
  } catch (err) {
    console.error("Confirmation error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


