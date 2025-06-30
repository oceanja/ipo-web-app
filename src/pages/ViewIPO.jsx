import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewIPO = () => {
  const { id } = useParams();
  const [ipo, setIpo] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/api/ipo/${id}`)
      .then((res) => setIpo(res.data))
      .catch((err) => console.error("Error fetching IPO:", err));
  }, [id]);

  if (!ipo) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h2>{ipo.company_name}</h2>
      <img src={ipo.company_logo} alt="Company Logo" width="100" />
      <p><strong>Price Band:</strong> {ipo.price_band}</p>
      <p><strong>Open Date:</strong> {ipo.open_date}</p>
      <p><strong>Close Date:</strong> {ipo.close_date}</p>
      <p><strong>Issue Size:</strong> {ipo.issue_size} Cr</p>
      <p><strong>Issue Type:</strong> {ipo.issue_type}</p>
      <p><strong>Listing Date:</strong> {ipo.listing_date}</p>
      <p><strong>Status:</strong> {ipo.status}</p>
      <p><strong>DRHP:</strong> <a href={ipo.drhp_pdf} target="_blank" rel="noreferrer">View PDF</a></p>
    </div>
  );
};

export default ViewIPO;
