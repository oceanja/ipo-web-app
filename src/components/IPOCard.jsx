import React from "react";

const IPOCard = ({
  name,
  price_band,
  open_date,
  close_date,
  issue_size,
  issue_type,
  listing_date,
  rhp_pdf,
  drhp_pdf,
  company_logo
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
      <div className="flex items-center space-x-2 mb-2">
        <img
          src={company_logo || "https://via.placeholder.com/50"}
          alt={name}
          className="h-6 w-6 object-contain"
        />
        <h3 className="text-blue-600 font-semibold text-sm">{name}</h3>
      </div>
      <div className="text-sm text-gray-700 space-y-1">
        <div className="flex justify-between"><span>Price Band</span><span>{price_band}</span></div>
        <div className="flex justify-between"><span>Open</span><span>{open_date}</span></div>
        <div className="flex justify-between"><span>Close</span><span>{close_date}</span></div>
        <div className="flex justify-between"><span>Issue Size</span><span>{issue_size}</span></div>
        <div className="flex justify-between"><span>Issue Type</span><span>{issue_type}</span></div>
        <div className="flex justify-between"><span>Listing Date</span><span>{listing_date}</span></div>
      </div>

      <div className="mt-3 flex gap-2">
        <a
          href={rhp_pdf || "#"}
          className="border border-blue-500 text-blue-500 px-3 py-1 text-xs rounded hover:bg-blue-50"
          target="_blank" rel="noreferrer"
        >
          RHP
        </a>
        <a
          href={drhp_pdf || "#"}
          className="bg-red-500 text-white px-3 py-1 text-xs rounded hover:bg-red-600"
          target="_blank" rel="noreferrer"
        >
          DRHP
        </a>
      </div>
    </div>
  );
};

export default IPOCard;
