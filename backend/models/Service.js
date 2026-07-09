const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: [
        "Cleaning",
        "Electrical",
        "Plumbing",
        "Appliances",
        "Painting",
        "Smart Home",
        "Woodwork",
      ],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    badge: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      default: 5,
    },

    duration: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    available: {
      type: Boolean,
      default: true,
    },

    location: {
      type: String,
      required: true,
    },

    coordinates: {
      latitude: {
        type: Number,
        required: true,
      },

      longitude: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);