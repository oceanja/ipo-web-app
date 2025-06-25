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

const addIPO = async (req, res) => {
  const {
    company_id,
    price_band,
    open_date,
    close_date,
    issue_size,
    issue_type,
    listing_date,
    status,
    ipo_price,
    listing_price,
    listing_gain,
    current_market_price,
    current_return
  } = req.body;

  try {
    const newIPO = await ipoModel.addIPO({
      company_id,
      price_band,
      open_date,
      close_date,
      issue_size,
      issue_type,
      listing_date,
      status,
      ipo_price,
      listing_price,
      listing_gain,
      current_market_price,
      current_return
    });
    res.status(201).json(newIPO);
  } catch (err) {
    console.error("Error adding IPO:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllIPOs,
  getIPOById,
  addIPO
};
