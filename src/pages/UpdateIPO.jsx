import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateIPO = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    company_name: "",
    company_logo: "",
    price_band: "",
    open_date: "",
    close_date: "",
    issue_size: "",
    issue_type: "",
    listing_date: "",
    status: "",
    drhp_pdf: "",
  });

  useEffect(() => {
    axios.get(`https://ipo-web-app-1.onrender.com/api/ipo/${id}`)
      .then((res) => setForm(res.data))
      .catch((err) => console.error("Error loading IPO:", err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://ipo-web-app-1.onrender.com/api/ipo/${id}`, form);
      alert("IPO updated!");
      navigate("/manage-ipo"); 
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Update IPO</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["company_name", "company_logo", "price_band", "open_date", "close_date", "issue_size", "issue_type", "listing_date", "status", "drhp_pdf"].map((field) => (
          <div key={field}>
            <label className="block capitalize">{field.replace("_", " ")}</label>
            <input
              type="text"
              name={field}
              value={form[field] || ""}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update IPO</button>
      </form>
    </div>
  );
};

export default UpdateIPO;
