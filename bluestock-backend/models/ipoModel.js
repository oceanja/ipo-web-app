const pool = require("../config/db");

const getAllIPOs = async () => {
  const result = await pool.query(`
    SELECT ipos.*, companies.company_name, companies.company_logo
    FROM ipos
    JOIN companies ON ipos.company_id = companies.company_id
  `);
  return result.rows;
};

const getIPOById = async (id) => {
  const result = await pool.query(`
    SELECT ipos.*, companies.company_name, companies.company_logo
    FROM ipos
    JOIN companies ON ipos.company_id = companies.company_id
    WHERE ipo_id = $1
  `, [id]);
  return result.rows[0];
};

const addIPO = async (data) => {
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
    drhp_pdf,
  } = data;

  const query = `
    INSERT INTO ipos (
      company_id, price_band, open_date, close_date, issue_size, issue_type,
      listing_date, status, ipo_price, listing_price, listing_gain,
      current_market_price, current_return, drhp_pdf
    ) VALUES (
      $1, $2, $3, $4, $5, $6,
      $7, $8, $9, $10, $11, $12,
      $13, $14
    )
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
    drhp_pdf || null
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};

const updateIPO = async (id, data) => {
  const {
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
  } = data;

  const query = `
    UPDATE ipos SET
      price_band = $1,
      open_date = $2,
      close_date = $3,
      issue_size = $4,
      issue_type = $5,
      listing_date = $6,
      status = $7,
      ipo_price = $8,
      listing_price = $9,
      listing_gain = $10,
      current_market_price = $11,
      current_return = $12,
      drhp_pdf = $13
    WHERE ipo_id = $14
    RETURNING *;
  `;

  const values = [
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
    drhp_pdf || null,
    id
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteIPO = async (id) => {
  const result = await pool.query("DELETE FROM ipos WHERE ipo_id = $1 RETURNING *", [id]);
  return result.rows[0];
};

module.exports = {
  getAllIPOs,
  getIPOById,
  addIPO,
  updateIPO,
  deleteIPO
};
