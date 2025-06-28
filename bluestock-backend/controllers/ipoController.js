const ipoModel = require("../models/ipoModel");
const companyModel = require("../models/companyModel");
const documentModel = require("../models/documentModel");

// Get all IPOs
const getAllIPOs = async (req, res) => {
  try {
    const ipos = await ipoModel.getAllIPOs();
    res.json(ipos);
  } catch (err) {
    console.error("Error fetching IPOs:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get IPO by ID
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

// Add new IPO
const addIPO = async (req, res) => {
  try {
    const {
      company_name,
      company_logo,
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
      current_return,
      drhp_pdf
    } = req.body;

    // Check if company already exists
    let companies = await companyModel.getAllCompanies();
    let company = companies.find(c => c.company_name === company_name);

    // Add company if not found
    if (!company) {
      company = await companyModel.addCompany({
        company_name,
        company_logo: company_logo || "https://via.placeholder.com/100"
      });
    }

    // Add IPO
    const ipo = await ipoModel.addIPO({
      company_id: company.company_id,
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
      current_return,
      drhp_pdf // ✅ INCLUDE THIS FIELD
    });

    // Optional: Add DRHP document (if needed in a separate documents table)
    if (drhp_pdf) {
      await documentModel.addDocument({
        ipo_id: ipo.ipo_id,
        rhp_pdf: null,
        drhp_pdf
      });
    }

    res.status(201).json({ message: "IPO created successfully", ipo });
  } catch (error) {
    console.error("Error adding IPO:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllIPOs,
  getIPOById,
  addIPO,
};
