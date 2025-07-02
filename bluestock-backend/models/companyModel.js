const pool = require("../config/db");

// Get all companies
const getAllCompanies = async () => {
  const result = await pool.query("SELECT * FROM companies");
  return result.rows;
};

// Get company by ID (optional but useful)
const getCompanyById = async (id) => {
  const result = await pool.query("SELECT * FROM companies WHERE company_id = $1", [id]);
  return result.rows[0];
};

// Add new company
const addCompany = async ({ company_name, company_logo }) => {
  const result = await pool.query(
    "INSERT INTO companies (company_name, company_logo) VALUES ($1, $2) RETURNING *",
    [company_name, company_logo]
  );
  return result.rows[0];
};

// ✅ Update existing company
const updateCompany = async (id, { company_name, company_logo }) => {
  const result = await pool.query(
    `UPDATE companies SET 
      company_name = $1,
      company_logo = $2
     WHERE company_id = $3
     RETURNING *;`,
    [company_name, company_logo, id]
  );
  return result.rows[0];
};

module.exports = {
  getAllCompanies,
  getCompanyById,
  addCompany,
  updateCompany, 
};
