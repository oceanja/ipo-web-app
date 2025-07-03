import React, { useEffect, useState } from "react";
import axios from "axios";
import IPOCard from "../components/IPOCard";
import PublicNavbar from "../components/PublicNavbar";

const HomePage = () => {
  const [ipoList, setIpoList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/api/ipo")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setIpoList(res.data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch IPOs:", err);
      });
  }, []);

  return (
    <>
      <PublicNavbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Upcoming IPO</h1>
          <p className="text-gray-600 mb-8">
            Invest and trade in IPO. Apply online for IPO. You might be allotted by the companies. Best of luck!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ipoList.map((ipo, index) => (
              <IPOCard key={index} {...ipo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
