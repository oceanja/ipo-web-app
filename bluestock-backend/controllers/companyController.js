const companyModel = require("../models/companyModel");

const getAllCompanies = async (req, res) => {
  try {
    const companies = await companyModel.getAllCompanies();
    res.json(companies);
  } catch (err) {
    console.error("Error fetching companies:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addCompany = async (req, res) => {
  const { company_name, company_logo } = req.body;
  try {
    const newCompany = await companyModel.addCompany({ company_name, company_logo });
    res.status(201).json(newCompany);
  } catch (err) {
    console.error("Error adding company:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllCompanies,
  addCompany,
};
