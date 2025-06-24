const ipoModel = require("../models/ipoModel");

const getAllIPOs = async (req, res) => {
  try {
    const ipos = await ipoModel.getAllIPOs();
    res.json(ipos);
  } catch (err) {
    console.error("Error fetching IPOs:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getIPOById = async (req, res) => {
  const { id } = req.params;
  try {
    const ipo = await ipoModel.getIPOById(id);
    if (!ipo) {
      return res.status(404).json({ error: "IPO not found" });
    }
    res.json(ipo);
  } catch (err) {
    console.error("Error fetching IPO by ID:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllIPOs,
  getIPOById,
};
