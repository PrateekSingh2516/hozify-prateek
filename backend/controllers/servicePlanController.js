const ServicePlan = require("../models/ServicePlan");

// GET ALL PLANS

const getPlans = async (req, res) => {
  try {
    const plans = await ServicePlan.find();

    res.status(200).json({
      success: true,
      plans,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// CREATE PLAN

const createPlan = async (req, res) => {

  try {

    const plan = await ServicePlan.create(req.body);

    res.status(201).json({
      success: true,
      plan,
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message,
    });

  }

};

module.exports = {
  getPlans,
  createPlan,
};