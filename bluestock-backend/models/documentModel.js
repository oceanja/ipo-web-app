const pool = require("../config/db");

const getDocumentsByIPOId = async (ipo_id) => {
  const result = await pool.query(
    "SELECT * FROM documents WHERE ipo_id = $1",
    [ipo_id]
  );
  return result.rows;
};

module.exports = {
  getDocumentsByIPOId,
};
