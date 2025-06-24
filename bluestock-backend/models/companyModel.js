const pool = require("../config/db");


const getAllCompanies = async () => {
  const result = await pool.query("SELECT * FROM companies");
  return result.rows;
};

// Add new company
const addCompany = async ({ company_name, company_logo }) => {
  const result = await pool.query(
    "INSERT INTO companies (company_name, company_logo) VALUES ($1, $2) RETURNING *",
    [company_name, company_logo]
  );
  return result.rows[0];
};

module.exports = {
  getAllCompanies,
  addCompany,
};
