const express = require("express");
const router = express.Router();
const ipoController = require("../controllers/ipoController");

router.get("/status-counts", ipoController.getIPOStatusCounts);
router.get("/", ipoController.getAllIPOs);
router.get("/:id", ipoController.getIPOById);
router.post("/", ipoController.addIPO);
router.put("/:id", ipoController.updateIPO);
router.delete("/:id", ipoController.deleteIPO);



module.exports = router;
