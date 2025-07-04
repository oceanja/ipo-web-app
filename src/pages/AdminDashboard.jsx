import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminDashboard.css";
import nseLogo from "../assets/images/NSE_IMAGELOGO.png";
import bseLogo from "../assets/images/BSE_IMAGElogo.png";
import sebiLogo from "../assets/images/sebiImage.png";
import moneyControlLogo from "../assets/images/MoneyLogo.png";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#6c63ff", "#a68cf4", "#e0e0e0"];

const AdminDashboard = () => {
  const [donutData, setDonutData] = useState([]);
  const [totalIPO, setTotalIPO] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIPOStats = async () => {
      try {
       const res = await axios.get("https://ipo-web-app-1.onrender.com/api/ipo/status-counts");
        const data = res.data;

        const formattedData = [
          { name: "Upcoming", value: data.Upcoming || 0 },
          { name: "New Listed", value: data["New Listed"] || 0 },
          { name: "Ongoing", value: data.Ongoing || 0 }
        ];

        setDonutData(formattedData);
        setTotalIPO(data.Total || 0);
      } catch (error) {
        console.error("Error fetching IPO status counts:", error);
        setDonutData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchIPOStats();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "2rem",
        flexWrap: "wrap"
      }}
    >
      
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={circleStyle("#e9e7fc", "#c6c1f4", "#5d51d4")}>
          <div style={{ fontSize: "20px" }}>3</div>
          IPO in Loss
        </div>
        <div style={circleStyle("#e0f9f4", "#a7efe2", "#1aa7b2")}>
          <div style={{ fontSize: "20px" }}>9</div>
          IPO in Gain
        </div>
        <div style={circleStyle("#ffe5c0", "white", "#f28c28", 120, 5)}>
          <div style={{ fontSize: "26px" }}>{totalIPO}</div>
          Total IPO
        </div>
      </div>

    
      <div style={{ flex: 1, minWidth: "250px" }}>
        <h4 style={{ marginBottom: "10px" }}>Quick Links</h4>
        <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>
          Adipiscing elit, sed do eiusmod tempor
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {[
            { name: "NSE India", logo: nseLogo },
            { name: "BSE India", logo: bseLogo },
            { name: "SEBI", logo: sebiLogo },
            { name: "Money Control", logo: moneyControlLogo }
          ].map((item, idx) => (
            <li key={idx} style={linkItemStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={item.logo} alt={item.name} style={logoStyle} />
                <span>{item.name}</span>
              </div>
              <a href="#" style={{ color: "#6c63ff", fontSize: "14px" }}>
                Visit Now
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1, minWidth: "280px", textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div>
            <h4>Main Board IPO</h4>
            <p style={{ fontSize: "13px", color: "#888" }}>From 01 Jan 2024</p>
          </div>
          <button style={reportButtonStyle}>View Report</button>
        </div>

        {/* Recharts Donut Chart */}
        <div style={{ width: "100%", height: 200 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={donutData.length ? donutData : [{ name: "Loading", value: 1 }]}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                labelLine={false}
                label={({ cx, cy }) =>
                  donutData.length ? (
                    <text
                      x={cx}
                      y={cy}
                      fill="#333"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="18"
                      fontWeight="bold"
                    >
                      {donutData.reduce((sum, d) => sum + d.value, 0)}
                    </text>
                  ) : null
                }
              >
                {(donutData.length ? donutData : [{ name: "Loading", value: 1 }]).map(
                  (entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  )
                )}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legends */}
        <div style={{ fontSize: "14px", color: "#555" }}>
          {donutData.length ? (
            donutData.map((entry, i) => (
              <div key={i}>
                <span style={{ color: COLORS[i], fontWeight: "bold" }}>•</span>{" "}
                {entry.name}: {entry.value}
              </div>
            ))
          ) : (
            <div>Loading chart...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

// === STYLES ===

const circleStyle = (
  bg,
  border,
  color,
  size = 100,
  borderWidth = 4
) => ({
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: "50%",
  backgroundColor: bg,
  border: `${borderWidth}px solid ${border}`,
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "600",
  color: color,
  textAlign: "center",
  fontSize: "14px",
  transform: size === 120 ? "translateY(8px)" : "none"
});

const logoStyle = {
  width: "40px",
  height: "40px",
  objectFit: "contain",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease-in-out"
};

const linkItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
  alignItems: "center",
  borderBottom: "1px solid #eee",
  paddingBottom: "6px"
};

const reportButtonStyle = {
  backgroundColor: "#f3f4ff",
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "6px 12px",
  fontSize: "14px",
  color: "#6c63ff",
  cursor: "pointer"
};
