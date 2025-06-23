import React from "react";
import IPOCard from "../components/IPOCard";
import PublicNavbar from "../components/PublicNavbar"; //  you're importing it

const ipoList = [
  {
    name: "Nova Agritech Ltd.",
    priceBand: "Rs 39 - 41",
    open: "2024-01-22",
    close: "2024-01-24",
    size: "143.81 Cr.",
    type: "Book Built",
    listing: "2024-01-30",
  },
  {
    name: "EPACK Durable Ltd.",
    priceBand: "Rs 218 - 230",
    open: "2024-01-19",
    close: "2024-01-23",
    size: "640.05 Cr.",
    type: "Book Built",
    listing: "2024-01-29",
  },
  {
    name: "RK Swamy Ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "Not Issued",
    type: "Book Built",
    listing: "Not Issued",
  },
  {
    name: "Oravel Stays Ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "8430 Cr.",
    type: "Book Built",
    listing: "Not Issued",
  },
  {
    name: "Imagine marketing ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "2000 Cr.",
    type: "Book Built",
    listing: "Not Issued",
  },
  {
    name: "Kids Clinic India ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "Not Issued",
    type: "Book Built",
    listing: "Not Issued",
  },
  {
    name: "OLA Electric Mobility ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "Not Issued",
    type: "Book Built",
    listing: "Not Issued",
  },
  {
    name: "One Mobikwik Systems ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "1900 Cr.",
    type: "Book Built",
    listing: "Not Issued",
  },
  {
    name: "Le Travenues Technology",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "1600 Cr.",
    type: "Book Built",
    listing: "Not Issued",
  },
  {
    name: "CMR Green Technologies",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "Not Issued",
    type: "Book Built",
    listing: "Not Issued",
  },
  {
    name: "Wellness Forever",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "Not Issued",
    type: "Book Built",
    listing: "Not Issued",
  },
  {
    name: "PKH Ventures Ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "Not Issued",
    type: "Book Built",
    listing: "Not Issued",
  },
];

const HomePage = () => {
  return (
    <>
      <PublicNavbar /> {/* ✅You forgot to include this line */}
      <div className="min-h-screen bg-[#f5f5f5] py-10 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#333]">
          Upcoming IPO
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ipoList.map((ipo, index) => (
            <IPOCard key={index} {...ipo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
