const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema(
  {
    hero: {
      title: String,
      subtitle: String,
      image: String,
      activeRequests: String,
    },

    roles: [
      {
        icon: String,
        title: String,
        description: String,
        features: [String],
        button: String,
      },
    ],

    calculator: {
      defaultHours: Number,
      baseIncome: Number,
    },

    benefits: [
      {
        icon: String,
        title: String,
        description: String,
      },
    ],

    testimonials: [
      {
        name: String,
        role: String,
        image: String,
        rating: Number,
        review: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Partner", partnerSchema);