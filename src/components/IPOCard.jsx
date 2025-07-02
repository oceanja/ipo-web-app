import React from "react";

const IPOCard = ({
  name,
  priceBand,
  open,
  close,
  size,
  type,
  listing,
  logo
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border w-full max-w-sm mx-auto">
     <div className="flex items-center mb-3">
        {/* Show logo if available */}
        {logo ? (
         <div className="w-12 h-12 bg-white border rounded-sm mr-3 flex items-center justify-center">
  <img
    src={logo}
    alt={`${name} logo`}
    className="w-10 h-10 object-contain"
  />
</div>


        ) : (
          <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
        )}
        <h2 className="text-lg font-semibold text-indigo-600">{name}</h2>
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
