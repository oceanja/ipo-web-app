import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { FaTrashAlt, FaEye } from "react-icons/fa";
import NovaImage from "../assets/NOVAImage.png";
import EPACKlogo from "../assets/EPACKImage.jpeg";
import RKSwamy from "../assets/RKImage.jpeg";
import oyo from "../assets/OYOlogo.png";  
import boat from "../assets/BoatImage.png"; 
import KidsClinic from "../assets/ClinicIndia.png";
import OlaElectric from "../assets/OLAlogo.png";
import MobiKwik from "../assets/MobiKwik.png";
import ixigo from "../assets/ixigo.jpg";
import cmr from "../assets/CMRlogo.jpg";
import wellness from "../assets/welnessLogo.png";
import pkhVentures from "../assets/PKHVneturesLogo.png";

// Sample IPO data to demonstrate the layout
const sampleIPOs = [
  {
    ipo_id: 1,
    company_name: "Adani Power",
    company_logo: NovaImage,
    price_band: "₹ 329 - 136",
    open_date: "2023-06-03",
    close_date: "2024-06-05",
    issue_size: "4553.015",
    issue_type: "Book Built",
    listing_date: "2023-06-10",
    status: "Ongoing"
  },
  {
    ipo_id: 2,
    company_name: "VBL LTD",
    company_logo: EPACKlogo,
    price_band: "₹ 229 - 136",
    open_date: "2024-06-03",
    close_date: "2024-06-05",
    issue_size: "1330.15",
    issue_type: "Book Built",
    listing_date: "2018-06-10",
    status: "Coming"
  },
  {
    ipo_id: 3,
    company_name: "Tata Motor",
    company_logo: RKSwamy,
    price_band: "₹ 12549 - 136",
    open_date: "2024-06-03",
    close_date: "2024-06-05",
    issue_size: "1340.15",
    issue_type: "Book Built",
    listing_date: "2016-06-10",
    status: "New Listed"
  },
  {
    ipo_id: 4,
    company_name: "HDFC LTD",
    company_logo: oyo,
    price_band: "₹ 1244 - 136",
    open_date: "2024-06-03",
    close_date: "2024-06-05",
    issue_size: "830.15",
    issue_type: "Book Built",
    listing_date: "2029-06-11",
    status: "Coming"
  },
  {
    ipo_id: 5,
    company_name: "Tata Motor",
    company_logo: boat,
    price_band: "₹ 629 - 136",
    open_date: "2024-06-01",
    close_date: "2024-06-05",
    issue_size: "820.15",
    issue_type: "Book Built",
    listing_date: "2023-06-10",
    status: "Ongoing"
  },
  {
    ipo_id: 6,
    company_name: "VBL LTD",
    company_logo: KidsClinic,
    price_band: "₹ 629 - 136",
    open_date: "2024-06-03",
    close_date: "2024-06-05",
    issue_size: "130.15",
    issue_type: "Book Built",
    listing_date: "2024-06-10",
    status: "Coming"
  },
  {
    ipo_id: 7,
    company_name: "Tata Motor",
    company_logo: OlaElectric,
    price_band: "₹ 6729 - 136",
    open_date: "2024-06-03",
    close_date: "2024-06-05",
    issue_size: "170.15",
    issue_type: "Book Built",
    listing_date: "2027-06-10",
    status: "New Listed"
  },
  {
    ipo_id: 8,
    company_name: "VBL LTD",
    company_logo: MobiKwik,
    price_band: "₹ 1629 - 136",
    open_date: "2024-06-03",
    close_date: "2024-06-05",
    issue_size: "130.15",
    issue_type: "Book Built",
    listing_date: "2022-06-10",
    status: "Coming"
  },
  {
    ipo_id: 9,
    company_name: "Tata Motor",
    company_logo: ixigo,
    price_band: "₹ 2329 - 136",
    open_date: "2024-06-03",
    close_date: "2024-06-05",
    issue_size: "130.15",
    issue_type: "Book Built",
    listing_date: "2023-06-10",
    status: "New Listed"
  },
  {
    ipo_id: 10,
    company_name: "VBL LTD",
    company_logo: cmr,
    price_band: "₹ 329 - 136",
    open_date: "2024-06-03",
    close_date: "2024-06-05",
    issue_size: "130.15",
    issue_type: "Book Built",
    listing_date: "2021-06-10",
    status: "Coming"
  }
];

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
  const location = useLocation(); //  to track route change
  const [ipoData, setIpoData] = useState(sampleIPOs);

  useEffect(() => {
    const fetchIPOs = async () => {
      try {
        const res = await axios.get("http://localhost:5050/api/ipo");
        if (res.data && res.data.length > 0) {
          setIpoData(res.data);
        }
      } catch (error) {
        console.error("Error fetching IPOs, using sample data:", error);
        // Keep sample data if API fails
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
