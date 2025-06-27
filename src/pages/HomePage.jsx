import React, { useEffect, useState } from "react";
import IPOCard from "../components/IPOCard";
import PublicNavbar from "../components/PublicNavbar";
import axios from "axios";

const HomePage = () => {
  const [ipoList, setIpoList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/api/ipo")
      .then((res) => setIpoList(res.data))
      .catch((err) => {
        console.error("Failed to fetch IPOs:", err);
      });
  }, []);

  return (
    <>
      <PublicNavbar />
      <div className="min-h-screen bg-[#f5f5f5] py-10 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#333]">
          Upcoming IPO
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ipoList.length > 0 ? (
            ipoList.map((ipo, index) => (
              <IPOCard key={index} {...ipo} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No IPOs available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
