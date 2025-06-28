const pool = require("../config/db");

// Get all documents (optional, can be used for listing or admin dashboard)
const getAllDocuments = async () => {
  const result = await pool.query("SELECT * FROM documents");
  return result.rows;
};


const getDocumentsByIPO = async (ipo_id) => {
  const result = await pool.query("SELECT * FROM documents WHERE ipo_id = $1", [ipo_id]);
  return result.rows;
};


const addDocument = async ({ ipo_id, rhp_pdf = null, drhp_pdf = null }) => {
  const result = await pool.query(
    `INSERT INTO documents (ipo_id, rhp_pdf, drhp_pdf)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [ipo_id, rhp_pdf, drhp_pdf]
  );
  return result.rows[0];
};

module.exports = {
  getAllDocuments,
  getDocumentsByIPO,
  addDocument,
};
