const documentModel = require("../models/documentModel");

const getAllDocuments = async (req, res) => {
  try {
    const docs = await documentModel.getAllDocuments();
    res.json(docs);
  } catch (err) {
    console.error("Error fetching documents:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getDocumentsByIPO = async (req, res) => {
  const { ipo_id } = req.params;
  try {
    const docs = await documentModel.getDocumentsByIPO(ipo_id);
    res.json(docs);
  } catch (err) {
    console.error("Error fetching IPO documents:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addDocument = async (req, res) => {
  const { ipo_id, rhp_pdf, drhp_pdf } = req.body;
  try {
    const newDoc = await documentModel.addDocument({ ipo_id, rhp_pdf, drhp_pdf });
    res.status(201).json(newDoc);
  } catch (err) {
    console.error("Error adding document:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllDocuments,
  getDocumentsByIPO,
  addDocument,
};
