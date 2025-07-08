import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: Object, required: true }, // Accepts an object
    confirmed: { type: Boolean, default: false },
    paymentReference: { type: String },
  }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
