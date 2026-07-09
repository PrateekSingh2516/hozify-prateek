const express = require("express");

const router = express.Router();

const {
  getPartnerData,
  createPartnerData,
  updatePartnerData,
  registerPartner,
} = require("../controllers/partnerController");

// GET Partner Page
router.get("/", getPartnerData);

// Create Data (Run Once)
router.post("/", createPartnerData);

// Update Existing Data
router.put("/", updatePartnerData);

router.post("/register", registerPartner);

module.exports = router;