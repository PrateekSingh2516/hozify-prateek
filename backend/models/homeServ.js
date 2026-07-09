const mongoose = require("mongoose");

const homeServSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 5,
    },

    reviews: {
      type: String,
      default: "0+",
    },

    price: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    featured: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("HomeServ", homeServSchema); 