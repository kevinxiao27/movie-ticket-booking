import express from "express";
import {
  deleteBooking,
  getBookingById,
  newBooking,
} from "../controllers/booking-controller";

const bookingRouter = express.Router();

bookingRouter.get("/:id", getBookingById);
bookingRouter.post("/", newBooking);
bookingRouter.post("/:id", deleteBooking);
export default bookingRouter;
