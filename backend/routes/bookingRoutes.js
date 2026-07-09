const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
  getBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

// ======================================
// CREATE BOOKING
// ======================================
router.post("/", createBooking);

// ======================================
// GET ALL BOOKINGS
// ======================================
router.get("/", getBookings);

// ======================================
// GET SINGLE BOOKING
// ======================================
router.get("/:id", getBooking);

// ======================================
// UPDATE BOOKING
// ======================================
router.put("/:id", updateBooking);

// ======================================
// DELETE BOOKING
// ======================================
router.delete("/:id", deleteBooking);

module.exports = router;