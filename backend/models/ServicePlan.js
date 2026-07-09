const mongoose = require("mongoose");

const servicePlanSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
    },

    planName: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    duration: {
      type: String,
      default: "/session",
    },

    features: [
      {
        type: String,
      },
    ],

    buttonText: {
      type: String,
      default: "Book Now",
    },

    popular: {
      type: Boolean,
      default: false,
    },

    theme: {
      type: String,
      enum: ["light", "dark"],
      default: "light",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ServicePlan", servicePlanSchema); 