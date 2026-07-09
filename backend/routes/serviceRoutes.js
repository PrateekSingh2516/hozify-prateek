const express = require("express");

const router = express.Router();

const {
  getServices,
  getFeaturedServices,
  getCategoryServices,
  searchServices,
  getSingleService,
  createService,
  updateService,
} = require("../controllers/serviceController");

// ======================================
// GET ALL SERVICES
// ======================================
router.get("/", getServices);

// ======================================
// GET FEATURED SERVICES
// ======================================
router.get("/featured", getFeaturedServices);

// ======================================
// SEARCH SERVICES
// ======================================
router.get("/search", searchServices);

// ======================================
// GET SERVICES BY CATEGORY
// ======================================
router.get("/category/:category", getCategoryServices);

// ======================================
// GET SINGLE SERVICE
// ======================================
router.get("/:id", getSingleService);

// ======================================
// CREATE SERVICE
// (Run through Postman)
// ======================================
router.post("/", createService);

// ======================================
// UPDATE SERVICE
// ======================================
router.put("/:id", updateService);

module.exports = router;