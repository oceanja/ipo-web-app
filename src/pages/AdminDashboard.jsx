import React from "react";
import "../styles/AdminDashboard.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const donutData = [
  { name: "Upcoming", value: 15 },
  { name: "New Listed", value: 25 },
  { name: "Ongoing", value: 2 },
];

const COLORS = ["#6c63ff", "#a68cf4", "#e0e0e0"];

const AdminDashboard = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
      {/* === Left Section: IPO Dashboard India (3 Circles) === */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* IPO in Loss */}
        <div style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "#e9e7fc",
          border: "4px solid #c6c1f4",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "600",
          color: "#5d51d4",
          textAlign: "center",
          fontSize: "14px",
        }}>
          <div style={{ fontSize: "20px" }}>9</div>
          IPO in Loss
        </div>

        {/* IPO in Gain */}
        <div style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "#e0f9f4",
          border: "4px solid #a7efe2",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "600",
          color: "#1aa7b2",
          textAlign: "center",
          fontSize: "14px",
        }}>
          <div style={{ fontSize: "20px" }}>20</div>
          IPO in Gain
        </div>

        {/* Total IPO */}
        <div style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          backgroundColor: "#ffe5c0",
          border: "5px double white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "700",
          color: "#f28c28",
          textAlign: "center",
          fontSize: "15px",
          transform: "translateY(8px)",
        }}>
          <div style={{ fontSize: "26px" }}>30</div>
          Total IPO
        </div>
      </div>

      {/* === Middle Section: Quick Links === */}
      <div style={{ flex: 1, minWidth: "250px" }}>
        <h4 style={{ marginBottom: "10px" }}>Quick Links</h4>
        <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>
          Adipiscing elit, sed do eiusmod tempor
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {["NSE India", "BSE India", "SEBI", "Money Control"].map((name, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                alignItems: "center",
                borderBottom: "1px solid #eee",
                paddingBottom: "6px",
              }}
            >
              <span>{name}</span>
              <a href="#" style={{ color: "#6c63ff", fontSize: "14px" }}>
                Visit Now
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* === Right Section: Donut Chart + Report === */}
      <div style={{ flex: 1, minWidth: "280px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h4>Main Board IPO</h4>
            <p style={{ fontSize: "13px", color: "#888" }}>From 01 Jan 2024</p>
          </div>
          <button
            style={{
              backgroundColor: "#f3f4ff",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "6px 12px",
              fontSize: "14px",
              color: "#6c63ff",
              cursor: "pointer",
            }}
          >
            View Report
          </button>
        </div>

        {/* 🔵 Recharts Donut Chart */}
        <div style={{ width: "100%", height: 200 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={donutData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                labelLine={false}
                label={({ cx, cy }) => (
                  <text
                    x={cx}
                    y={cy}
                    fill="#333"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="18"
                    fontWeight="bold"
                  >
                    15
                  </text>
                )}
              >
                {donutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legends */}
        <div style={{ fontSize: "14px", color: "#555" }}>
          <div>
            <span style={{ color: "#6c63ff", fontWeight: "bold" }}>•</span> Upcoming: 15
          </div>
          <div>
            <span style={{ color: "#a68cf4", fontWeight: "bold" }}>•</span> New Listed: 25
          </div>
          <div>
            <span style={{ color: "#ccc", fontWeight: "bold" }}>•</span> Ongoing: 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
