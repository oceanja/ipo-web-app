const pool = require("../config/db");

// List all IPOs (with company info)
const getAllIPOs = async () => {
  const result = await pool.query(`
    SELECT i.*, c.company_name, c.company_logo
    FROM ipos i
    JOIN companies c ON i.company_id = c.company_id
  `);
  return result.rows;
};

// Get IPO by ID
const getIPOById = async (id) => {
  const result = await pool.query("SELECT * FROM ipos WHERE ipo_id = $1", [id]);
  return result.rows[0];
};

module.exports = {
  getAllIPOs,
  getIPOById,
};
