const Testimonial = require("../models/Testimonial");

// Get All Testimonials
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();

    res.status(200).json({
      success: true,
      testimonials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add Testimonial
const createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);

    res.status(201).json({
      success: true,
      testimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getTestimonials,
  createTestimonial,
};