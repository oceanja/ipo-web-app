import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaTrashAlt, FaEye } from "react-icons/fa";

const ipoData = [
  {
    company: "Adani Power",
    priceBand: "₹ 329 - 136",
    open: "2023-06-03",
    close: "2024-06-05",
    issueSize: "4553.10 Cr.",
    issueType: "Book Built",
    listingDate: "2023-06-10",
    status: "Ongoing",
  },
  {
    company: "VBL LTD",
    priceBand: "₹ 229 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "1330.15 Cr.",
    issueType: "Book Built",
    listingDate: "2018-06-10",
    status: "Coming",
  },
  {
    company: "Tata Motor",
    priceBand: "₹ 12549 - 136",
    open: "2024-06-03",
    close: "2024-06-05",
    issueSize: "1340.15 Cr.",
    issueType: "Book Built",
    listingDate: "2016-06-10",
    status: "New Listed",
  },
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

  return (
    <div>
      <Navbar />
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
                  <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{ipo.company}</td>
                  <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{ipo.priceBand}</td>
                  <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{ipo.open}</td>
                  <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{ipo.close}</td>
                  <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{ipo.issueSize}</td>
                  <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{ipo.issueType}</td>
                  <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{ipo.listingDate}</td>
                  <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>{getStatusBadge(ipo.status)}</td>
                  <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>
                    <button style={buttonStyle.update}>Update</button>
                  </td>
                  <td style={{ border: "1px solid #e0e0e0", padding: "10px" }}>
                    <button style={buttonStyle.delete}><FaTrashAlt /></button>
                    <button style={buttonStyle.view}><FaEye /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageIPO;
