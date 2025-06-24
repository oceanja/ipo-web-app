const documentModel = require("../models/documentModel");

const getDocumentsByIPOId = async (req, res) => {
  const { id } = req.params;
  try {
    const docs = await documentModel.getDocumentsByIPOId(id);
    res.json(docs);
  } catch (err) {
    console.error("Error fetching documents:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getDocumentsByIPOId,
};
