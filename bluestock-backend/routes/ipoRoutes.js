const express = require("express");
const router = express.Router();
const ipoController = require("../controllers/ipoController");

router.get("/", ipoController.getAllIPOs);
router.get("/:id", ipoController.getIPOById);

module.exports = router;
