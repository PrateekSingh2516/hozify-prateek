const Booking = require("../models/Booking");

// ===============================
// Create Booking
// ===============================

const createBooking = async (req, res) => {
    try {

        const booking = await Booking.create(req.body);

        res.status(201).json({
            success: true,
            booking
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

// ===============================
// Get All Bookings
// ===============================

const getBookings = async (req, res) => {

    try {

        const bookings = await Booking.find().sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            bookings
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// ===============================
// Get Single Booking
// ===============================

const getBooking = async (req, res) => {

    try {

        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        res.status(200).json({
            success: true,
            booking
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// ===============================
// Update Booking
// ===============================

const updateBooking = async (req, res) => {

    try {

        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        res.status(200).json({
            success: true,
            booking
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// ===============================
// Delete Booking
// ===============================

const deleteBooking = async (req, res) => {

    try {

        await Booking.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Booking deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = {
    createBooking,
    getBookings,
    getBooking,
    updateBooking,
    deleteBooking
};