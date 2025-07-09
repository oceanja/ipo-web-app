import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminDashboard.css";
import nseLogo from "../assets/images/NSE_IMAGELOGO.png";
import bseLogo from "../assets/images/BSE_IMAGElogo.png";
import sebiLogo from "../assets/images/sebiImage.png";
import moneyControlLogo from "../assets/images/MoneyLogo.png";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#6366f1", "#8b5cf6", "#e5e7eb"];

const AdminDashboard = () => {
  const [donutData, setDonutData] = useState([]);
  const [totalIPO, setTotalIPO] = useState(30);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIPOStats = async () => {
      try {
        const res = await axios.get("https://ipo-web-app-1.onrender.com/api/ipo/status-counts");
        const data = res.data;

        const formattedData = [
          { name: "Upcoming", value: data.Upcoming || 15 },
          { name: "New Listed", value: data["New Listed"] || 25 },
          { name: "Ongoing", value: data.Ongoing || 2 }
        ];

        setDonutData(formattedData);
        setTotalIPO(data.Total || 30);
      } catch (error) {
        console.error("Error fetching IPO status counts:", error);
        // Set default data if API fails
        setDonutData([
          { name: "Upcoming", value: 15 },
          { name: "New Listed", value: 25 },
          { name: "Ongoing", value: 2 }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchIPOStats();
  }, []);

  const gainIPO = 20;
  const lossIPO = 9;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Dashboard</h1>
      
      <div className="dashboard-grid">
        {/* IPO Dashboard India Section */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>IPO Dashboard India</h3>
            <div className="gain-indicator">
              <span className="gain-arrow">↑</span>
              <span className="gain-text">{gainIPO} IPO in Gain</span>
            </div>
          </div>
          
          <div className="circles-container">
            {/* IPO in Loss - Top left circle */}
            <div className="circle loss-circle">
              <div className="circle-number">{lossIPO}</div>
              <div className="circle-label">IPO in Loss</div>
            </div>
            
            {/* Total IPO - Large right circle */}
            <div className="circle total-circle">
              <div className="circle-number large">{totalIPO}</div>
              <div className="circle-label">Total IPO</div>
            </div>
            
            {/* IPO in Gain - Bottom left circle */}
            <div className="circle gain-circle">
              <div className="circle-number">{gainIPO}</div>
              <div className="circle-label">IPO in Gain</div>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Quick Links</h3>
            <p className="card-subtitle">Adipiscing elit, sed do eiusmod tempor</p>
          </div>
          
          <div className="quick-links">
            {[
              { name: "NSE India", logo: nseLogo, color: "#ff6b35" },
              { name: "BSE India", logo: bseLogo, color: "#4f46e5" },
              { name: "SEBI", logo: sebiLogo, color: "#6366f1" },
              { name: "Money Control", logo: moneyControlLogo, color: "#0891b2" }
            ].map((item, idx) => (
              <div key={idx} className="quick-link-item">
                <div className="link-info">
                  <div className="logo-container" style={{ backgroundColor: `${item.color}15` }}>
                    <img src={item.logo} alt={item.name} className="link-logo" />
                  </div>
                  <span className="link-name">{item.name}</span>
                </div>
                <button className="visit-btn">Visit Now</button>
              </div>
            ))}
          </div>
        </div>

        {/* Main Board IPO Section */}
        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <h3>Main Board IPO</h3>
              <p className="card-subtitle">From 01 Jan 2024</p>
            </div>
            <button className="view-report-btn">View Report</button>
          </div>
          
          <div className="chart-container">
            <div className="donut-chart">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={donutData}
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                  >
                    {donutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Center number */}
              
            </div>
            
            {/* Chart Legend */}
            <div className="chart-legend">
              {donutData.map((entry, i) => (
                <div key={i} className="legend-item">
                  <div 
                    className="legend-dot" 
                    style={{ backgroundColor: COLORS[i] }}
                  ></div>
                  <span className="legend-label">{entry.name}</span>
                  <span className="legend-value">{entry.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
