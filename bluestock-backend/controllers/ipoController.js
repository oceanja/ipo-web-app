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

    if (!company_name || !price_band || !issue_size || !issue_type || !status) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Find or add company
    let companies = await companyModel.getAllCompanies();
    let company = companies.find(c => c.company_name.toLowerCase() === company_name.toLowerCase());

    if (!company) {
      company = await companyModel.addCompany({
        company_name,
        company_logo: company_logo || "https://via.placeholder.com/100"
      });
    }

    if (!company || !company.company_id) {
      return res.status(400).json({ error: "Company ID could not be determined" });
    }

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
      drhp_pdf
    });

    // Optional: Add DRHP document
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
  getIPOById: async (req, res) => {
    try {
      const ipo = await ipoModel.getIPOById(req.params.id);
      if (!ipo) return res.status(404).json({ error: "IPO not found" });
      res.json(ipo);
    } catch (err) {
      console.error("Error fetching IPO by ID:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  addIPO,
  updateIPO: async (req, res) => {
    try {
      const id = req.params.id;
      const existing = await ipoModel.getIPOById(id);
      if (!existing) return res.status(404).json({ error: "IPO not found" });

      const updated = await ipoModel.updateIPO(id, req.body);
      res.json({ message: "IPO updated successfully", ipo: updated });
    } catch (err) {
      console.error("Error updating IPO:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  deleteIPO: async (req, res) => {
    try {
      const deleted = await ipoModel.deleteIPO(req.params.id);
      if (!deleted) return res.status(404).json({ error: "IPO not found" });
      res.json({ message: "IPO deleted successfully" });
    } catch (err) {
      console.error("Error deleting IPO:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getIPOStatusCounts: async (req, res) => {
    try {
      const ipos = await ipoModel.getAllIPOs();
      const counts = {
        Upcoming: 0,
        "New Listed": 0,
        Ongoing: 0,
        Total: ipos.length
      };
      ipos.forEach(ipo => {
        if (counts[ipo.status] !== undefined) counts[ipo.status]++;
      });
      res.json(counts);
    } catch (err) {
      console.error("Error fetching IPO status counts:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
