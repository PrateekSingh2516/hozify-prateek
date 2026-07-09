const express = require("express");

const router = express.Router();

const {
  getFranchiseData,
  createFranchiseData,
  updateFranchiseData,
  applyFranchise,
} = require("../controllers/franchiseController");

// ======================================
// GET Franchise Page Data
// ======================================
router.get("/", getFranchiseData);

// ======================================
// CREATE Franchise Page Data
// (Run Only Once)
// ======================================
router.post("/", createFranchiseData);

// ======================================
// UPDATE Franchise Page Data
// ======================================
router.put("/", updateFranchiseData);

// ======================================
// SUBMIT Franchise Application
// ======================================
router.post("/apply", applyFranchise);

module.exports = router;