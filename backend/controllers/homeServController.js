const HomeServ = require("../models/homeServ");

const getHomeServices = async (req, res) => {
  try {
    const services = await HomeServ.find();

    res.status(200).json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const addHomeService = async (req, res) => {
  try {

    const service = await HomeServ.create(req.body);

    res.status(201).json({
      success: true,
      message: "Home Service Added Successfully",
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
  getHomeServices,
    addHomeService,
};