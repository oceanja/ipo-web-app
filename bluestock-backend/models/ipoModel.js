const pool = require("../config/db");

const getAllIPOs = async () => {
  const result = await pool.query("SELECT * FROM ipos");
  return result.rows;
};

const getIPOById = async (id) => {
  const result = await pool.query("SELECT * FROM ipos WHERE ipo_id = $1", [id]);
  return result.rows[0];
};

const addIPO = async (data) => {
  console.log("🚀 Data received in addIPO:", data); // ✅ log all input

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
    current_return,
  } = data;

  const query = `
    INSERT INTO ipos (
      company_id, price_band, open_date, close_date, issue_size, issue_type,
      listing_date, status, ipo_price, listing_price, listing_gain, current_market_price, current_return
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING *;
  `;

  const values = [
    company_id,
    price_band,
    open_date || null,
    close_date || null,
    issue_size,
    issue_type,
    listing_date || null,
    status,
    ipo_price || null,
    listing_price || null,
    listing_gain || null,
    current_market_price || null,
    current_return || null,
  ];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("🔥 SQL Insert Error in addIPO:", error);
    throw error; // Let controller handle 500
  }
};



module.exports = {
  getAllIPOs,
  getIPOById,
  addIPO
};
