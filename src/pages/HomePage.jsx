import React, { useEffect, useState } from "react";
import axios from "axios";
import IPOCard from "../components/IPOCard";
import PublicNavbar from "../components/PublicNavbar";
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
    company_name: "Nova Agritech Ltd.",
    company_logo: NovaImage,
    price_band: "Rs 39 - 41",
    open_date: "2024-01-22",
    close_date: "2024-01-24",
    issue_size: "143.81",
    issue_type: "Book Built",
    listing_date: "2024-01-30",
    status: "New Listed"
  },
  {
    company_name: "EPACK Durable Ltd.",
    company_logo: EPACKlogo,
    price_band: "Rs 218 - 230",
    open_date: "2024-01-19",
    close_date: "2024-01-23",
    issue_size: "640.05",
    issue_type: "Book Built",
    listing_date: "2024-01-29",
    status: "New Listed"
  },
  {
    company_name: "RK Swamy Ltd.",
    company_logo: RKSwamy,
    price_band: "Not Issued",
    open_date: "Not Issued",
    close_date: "Not Issued",
    issue_size: "Not Issued",
    issue_type: "Book Built",
    listing_date: "Not Issued",
    status: "Coming"
  },
  {
    company_name: "Oravel Stays Ltd.",
    company_logo: oyo,
    price_band: "Not Issued",
    open_date: "Not Issued",
    close_date: "Not Issued",
    issue_size: "8430",
    issue_type: "Book Built",
    listing_date: "Not Issued",
    status: "Coming"
  },
  {
    company_name: "Imagine Marketing Ltd.",
    company_logo: boat,
    price_band: "Not Issued",
    open_date: "Not Issued",
    close_date: "Not Issued",
    issue_size: "2000",
    issue_type: "Book Built",
    listing_date: "Not Issued",
    status: "Coming"
  },
  {
    company_name: "Kids Clinic India Ltd.",
    company_logo: KidsClinic,
    price_band: "Not Issued",
    open_date: "Not Issued",
    close_date: "Not Issued",
    issue_size: "Not Issued",
    issue_type: "Book Built",
    listing_date: "Not Issued",
    status: "Coming"
  },
  {
    company_name: "OLA Electric Mobility Ltd.",
    company_logo: OlaElectric,
    price_band: "Not Issued",
    open_date: "Not Issued",
    close_date: "Not Issued",
    issue_size: "Not Issued",
    issue_type: "Book Built",
    listing_date: "Not Issued",
    status: "Coming"
  },
  {
    company_name: "One Mobikwik Systems Ltd.",
    company_logo: MobiKwik,
    price_band: "Not Issued",
    open_date: "Not Issued",
    close_date: "Not Issued",
    issue_size: "1900",
    issue_type: "Book Built",
    listing_date: "Not Issued",
    status: "Coming"
  },
  {
    company_name: "Le Travenues Technology",
    company_logo: ixigo,
    price_band: "Not Issued",
    open_date: "Not Issued",
    close_date: "Not Issued",
    issue_size: "1600",
    issue_type: "Book Built",
    listing_date: "Not Issued",
    status: "Coming"
  },
  {
    company_name: "CMR Green Technologies",
    company_logo: cmr,
    price_band: "Not Issued",
    open_date: "Not Issued",
    close_date: "Not Issued",
    issue_size: "Not Issued",
    issue_type: "Book Built",
    listing_date: "Not Issued",
    status: "Coming"
  },
  {
    company_name: "Wellness Forever",
    company_logo: wellness,
    price_band: "Not Issued",
    open_date: "Not Issued",
    close_date: "Not Issued",
    issue_size: "Not Issued",
    issue_type: "Book Built",
    listing_date: "Not Issued",
    status: "Coming"
  },
  {
    company_name: "PKH Ventures Ltd.",
    company_logo: pkhVentures,
    price_band: "Not Issued",
    open_date: "Not Issued",
    close_date: "Not Issued",
    issue_size: "Not Issued",
    issue_type: "Book Built",
    listing_date: "Not Issued",
    status: "Coming"
  }
];

const HomePage = () => {
  const [ipoList, setIpoList] = useState(sampleIPOs);

  useEffect(() => {
    // Try to fetch from API, but fallback to sample data
    axios.get("http://localhost:5050/api/ipo")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setIpoList(res.data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch IPOs, using sample data:", err);
        // Keep sample data if API fails
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
