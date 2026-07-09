const Partner = require("../models/Partner");
const PartnerRegistration = require("../models/PartnerRegistration");

// GET Partner Page Data
const getPartnerData = async (req, res) => {
  try {
    const partner = await Partner.findOne();

    res.status(200).json({
      success: true,
      partner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CREATE Partner Page Data
const createPartnerData = async (req, res) => {
  try {
    const partner = await Partner.create(req.body);

    res.status(201).json({
      success: true,
      partner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE Partner Page Data
const updatePartnerData = async (req, res) => {
  try {
    const partner = await Partner.findOneAndUpdate({}, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      partner,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// REGISTER PARTNER
const registerPartner = async (req, res) => {
  try {

    const registration = await PartnerRegistration.create(req.body);

    res.status(201).json({
      success: true,
      registration,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


module.exports = {
  getPartnerData,
  createPartnerData,
  updatePartnerData,
  registerPartner,
};