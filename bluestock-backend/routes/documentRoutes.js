const express = require("express");
const router = express.Router();
const documentController = require("../controllers/documentController");

router.get("/", documentController.getAllDocuments);
router.get("/:ipo_id", documentController.getDocumentsByIPO);
router.post("/", documentController.addDocument);

module.exports = router;
