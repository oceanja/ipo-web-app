import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { FaTrashAlt, FaEye } from "react-icons/fa";

const getStatusBadge = (status) => {
  const baseStyle = {
    padding: "6px 16px",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: "500",
    display: "inline-block",
  };

  switch (status) {
    case "Ongoing":
      return <span style={{ ...baseStyle, backgroundColor: "#d9f5e5", color: "#2ebd7f" }}>Ongoing</span>;
    case "Coming":
      return <span style={{ ...baseStyle, backgroundColor: "#fff6e5", color: "#ffb43a" }}>Coming</span>;
    case "New Listed":
      return <span style={{ ...baseStyle, backgroundColor: "#fce3ea", color: "#ed4b82" }}>New Listed</span>;
    default:
      return <span style={{ ...baseStyle, backgroundColor: "#eee", color: "#333" }}>{status}</span>;
  }
};

const buttonStyle = {
  update: {
    backgroundColor: "#6c63ff",
    border: "none",
    color: "#fff",
    fontSize: "13px",
    padding: "6px 14px",
    borderRadius: "8px",
  },
  delete: {
    backgroundColor: "#ff6961",
    border: "none",
    color: "#fff",
    fontSize: "13px",
    padding: "6px 10px",
    borderRadius: "8px",
    marginRight: "8px",
  },
  view: {
    border: "1px solid #ccc",
    backgroundColor: "transparent",
    color: "#444",
    fontSize: "13px",
    padding: "6px 10px",
    borderRadius: "8px",
  },
};

const ManageIPO = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 to track route change
  const [ipoData, setIpoData] = useState([]);

  useEffect(() => {
    const fetchIPOs = async () => {
      try {
        const res = await axios.get("http://localhost:5050/api/ipo");
        setIpoData(res.data);
      } catch (error) {
        console.error("Error fetching IPOs:", error);
      }
    };

    fetchIPOs();
  }, [location.key]); // 👈 refresh on every route change

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5050/api/ipo/${id}`);
      setIpoData((prev) => prev.filter((ipo) => ipo.ipo_id !== id));
    } catch (error) {
      console.error("Error deleting IPO:", error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Upcoming IPO | Dashboard</h4>
        <button
          onClick={() => navigate("/register-ipo")}
          style={{
            backgroundColor: "#6c63ff",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          Register IPO
        </button>
      </div>

      <div className="table-responsive">
        <table
          className="align-middle text-center"
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid #e0e0e0",
          }}
        >
          <thead style={{ backgroundColor: "#f9f9fb", fontSize: "14px" }}>
            <tr>
              {[
                "Company",
                "Price Band",
                "Open",
                "Close",
                "Issue Size",
                "Issue Type",
                "Listing Date",
                "Status",
                "Action",
                "Delete / View",
              ].map((heading, idx) => (
                <th
                  key={idx}
                  style={{
                    border: "1px solid #e0e0e0",
                    padding: "10px",
                    fontWeight: 500,
                  }}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ipoData.map((ipo, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f6f5ff" : "#fff",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{ipo.company_name}</td>
                <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{ipo.price_band}</td>
                <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{formatDate(ipo.open_date)}</td>
                <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{formatDate(ipo.close_date)}</td>
                <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{ipo.issue_size} Cr.</td>
                <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{ipo.issue_type}</td>
                <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{formatDate(ipo.listing_date)}</td>
                <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{getStatusBadge(ipo.status)}</td>
                <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>
                  <button
                    style={buttonStyle.update}
                    onClick={() => navigate(`/update-ipo/${ipo.ipo_id}`)}
                  >
                    Update
                  </button>
                </td>
                <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>
                  <button style={buttonStyle.delete} onClick={() => handleDelete(ipo.ipo_id)}>
                    <FaTrashAlt />
                  </button>
                  <button style={buttonStyle.view} onClick={() => navigate(`/ipo/${ipo.ipo_id}`)}>
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
            {ipoData.length === 0 && (
              <tr>
                <td colSpan="10" style={{ padding: "20px", color: "#999" }}>
                  No IPOs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageIPO;
