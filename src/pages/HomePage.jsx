import React, { useEffect, useState } from "react";
import IPOCard from "../components/IPOCard";
import PublicNavbar from "../components/PublicNavbar"; //  you're importing it
import NovaImage from "../assets/NOVAImage.png";
import EPACKlogo from "../assets/EPACKImage.jpeg";
import RKSwamy from "../assets/RKImage.jpeg";
import oyo from "../assets/OYOlogo.png";  
import boat from "../assets/BoatImage.png"; 
import  KidsClinic from "../assets/ClinicIndia.png";
import  OlaElectric from "../assets/OLAlogo.png";
import  MobiKwik from "../assets/MobiKwik.png";
import ixigo from "../assets/ixigo.jpg";
import cmr from "../assets/CMRlogo.jpg";
import wellness from "../assets/welnessLogo.png";
import pkhVentures from "../assets/PKHVneturesLogo.png";
const ipoList = [
  {
    name: "Nova Agritech Ltd.",
    priceBand: "Rs 39 - 41",
    open: "2024-01-22",
    close: "2024-01-24",
    size: "143.81 Cr.",
    type: "Book Built",
    listing: "2024-01-30",
    logo: NovaImage
  },
  {
    name: "EPACK Durable Ltd.",
    priceBand: "Rs 218 - 230",
    open: "2024-01-19",
    close: "2024-01-23",
    size: "640.05 Cr.",
    type: "Book Built",
    listing: "2024-01-29",
    logo: EPACKlogo
  },
  {
    name: "RK Swamy Ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "Not Issued",
    type: "Book Built",
    listing: "Not Issued",
    logo: RKSwamy,
  },
  {
    name: "Oravel Stays Ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "8430 Cr.",
    type: "Book Built",
    listing: "Not Issued",
    logo: oyo
  },
  {
    name: "Imagine marketing ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "2000 Cr.",
    type: "Book Built",
    listing: "Not Issued",
    logo: boat
  },
  {
    name: "Kids Clinic India ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "Not Issued",
    type: "Book Built",
    listing: "Not Issued",
    logo: KidsClinic
  },
  {
    name: "OLA Electric Mobility ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "Not Issued",
    type: "Book Built",
    listing: "Not Issued",
    logo: OlaElectric
  },
  {
    name: "One Mobikwik Systems ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "1900 Cr.",
    type: "Book Built",
    listing: "Not Issued",
    logo: MobiKwik
  },
  {
    name: "Le Travenues Technology",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "1600 Cr.",
    type: "Book Built",
    listing: "Not Issued",
    logo: ixigo
  },
  {
    name: "CMR Green Technologies",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "Not Issued",
    type: "Book Built",
    listing: "Not Issued",
    logo:cmr
  },
  {
    name: "Wellness Forever",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "Not Issued",
    type: "Book Built",
    listing: "Not Issued",
    logo: wellness
  },
  {
    name: "PKH Ventures Ltd.",
    priceBand: "Not Issued",
    open: "Not Issued",
    close: "Not Issued",
    size: "Not Issued",
    type: "Book Built",
    listing: "Not Issued",
    logo: pkhVentures
  },
];

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
      <PublicNavbar /> {/* You forgot to include this line */}
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
