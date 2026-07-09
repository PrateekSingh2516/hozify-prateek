const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    designation: {
      type: String,
      default: "Verified Customer",
    },

    avatar: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 5,
    },

    review: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);