const mongoose = require("mongoose");

const partnerRegistrationSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    domain: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "PartnerRegistration",
  partnerRegistrationSchema
);