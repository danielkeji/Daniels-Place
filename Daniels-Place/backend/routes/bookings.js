import { Router } from "express";
import {
  createBooking,
  generatePaymentLink,
} from "../controllers/bookingControllers.js";
const router = Router();

router.post("/", createBooking);
router.post("/pay", generatePaymentLink);

export default router;
