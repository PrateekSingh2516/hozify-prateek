const Franchise = require("../models/Franchise");
const FranchiseLead = require("../models/FranchiseLead");

// ======================================
// GET FRANCHISE PAGE DATA
// ======================================

const getFranchiseData = async (req, res) => {
  try {
    const franchise = await Franchise.findOne();

    res.status(200).json({
      success: true,
      franchise,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// CREATE FRANCHISE PAGE DATA
// (Run Only Once)
// ======================================

const createFranchiseData = async (req, res) => {
  try {
    const franchise = await Franchise.create(req.body);

    res.status(201).json({
      success: true,
      franchise,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// UPDATE FRANCHISE PAGE DATA
// ======================================

const updateFranchiseData = async (req, res) => {
  try {
    const franchise = await Franchise.findOneAndUpdate(
      {},
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      franchise,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// SUBMIT FRANCHISE APPLICATION
// ======================================

const applyFranchise = async (req, res) => {
  try {
    const {
      fullName,
      email,
      investmentCapital,
      targetTerritory,
      additionalContext,
    } = req.body;

    const application = await FranchiseLead.create({
      fullName,
      email,
      investmentCapital,
      targetTerritory,
      additionalContext,
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully.",
      application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getFranchiseData,
  createFranchiseData,
  updateFranchiseData,
  applyFranchise,
};