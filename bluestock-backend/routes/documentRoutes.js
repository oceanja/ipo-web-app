const express = require("express");
const router = express.Router();
const documentController = require("../controllers/documentController");

router.get("/ipo/:id", documentController.getDocumentsByIPOId);

module.exports = router;
