const mongoose = require("mongoose");

const franchiseSchema = new mongoose.Schema(
  {
    // ================= HERO =================
    hero: {
      badge: String,
      title: String,
      highlight: String,
      description: String,
      image: String,
      growth: String,
      growthText: String,
      primaryButton: String,
      secondaryButton: String,
    },

    // ================= STATS =================
    stats: [
      {
        number: String,
        label: String,
      },
    ],

    // ================= HOZIFY EDGE =================
    features: [
      {
        icon: String,
        title: String,
        description: String,
        image: String,
        featured: Boolean,
      },
    ],

    // ================= TERRITORY =================
    territory: {
      image: String,
      badge: String,
      title: String,
      description: String,

      points: [
        {
          icon: String,
          title: String,
          description: String,
        },
      ],
    },

    // ================= INVESTMENT TIERS =================
    plans: [
      {
        name: String,
        price: String,
        subtitle: String,
        popular: Boolean,
        button: String,
        features: [String],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Franchise", franchiseSchema);