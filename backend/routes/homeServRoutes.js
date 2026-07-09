const express = require("express");

const router = express.Router();

const {
  getHomeServices,
  addHomeService,
} = require("../controllers/homeServController");

router.get("/", getHomeServices);
router.post("/", addHomeService);

module.exports = router;