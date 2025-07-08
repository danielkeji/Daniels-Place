import { Router } from "express";
import {
  createBooking,
  generatePaymentLink,
  confirmBooking,
} from "../controllers/bookingControllers.js";
const router = Router();


router.post("/", createBooking);
router.post("/pay", generatePaymentLink);
router.post("/confirm", confirmBooking);

export default router;
