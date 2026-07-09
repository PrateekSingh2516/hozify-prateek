const Service = require("../models/Service");

// ======================================
// GET ALL SERVICES
// ======================================

const getServices = async (req, res) => {
  try {
    const services = await Service.find({ available: true });

    res.status(200).json({
      success: true,
      services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// GET FEATURED SERVICES
// ======================================

const getFeaturedServices = async (req, res) => {
  try {
    const services = await Service.find({
      featured: true,
      available: true,
    });

    res.status(200).json({
      success: true,
      services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// GET SERVICES BY CATEGORY
// ======================================

const getCategoryServices = async (req, res) => {
  try {
    const services = await Service.find({
      category: req.params.category,
      available: true,
    });

    res.status(200).json({
      success: true,
      services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// SEARCH SERVICES
// ======================================

const searchServices = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const services = await Service.find({
      available: true,
      title: {
        $regex: keyword,
        $options: "i",
      },
    });

    res.status(200).json({
      success: true,
      services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// GET SINGLE SERVICE
// ======================================

const getSingleService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// CREATE SERVICE
// (Use Postman)
// ======================================

const createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);

    res.status(201).json({
      success: true,
      service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// UPDATE SERVICE
// ======================================

const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getServices,
  getFeaturedServices,
  getCategoryServices,
  searchServices,
  getSingleService,
  createService,
  updateService,
};