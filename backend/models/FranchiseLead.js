const mongoose = require("mongoose");

const franchiseLeadSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    investmentCapital: {
      type: String,
      required: true,
    },

    targetTerritory: {
      type: String,
      required: true,
      trim: true,
    },

    additionalContext: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Contacted", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FranchiseLead", franchiseLeadSchema);