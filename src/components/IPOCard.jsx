import React from "react";

const IPOCard = ({
  company_name,
  company_logo,
  price_band,
  open_date,
  close_date,
  issue_size,
  issue_type,
  listing_date,
  status,
  rhp_pdf,
  drhp_pdf
}) => {
  const formatDate = (dateString) => {
    if (!dateString || dateString === "Not Issued") return "Not Issued";
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Ongoing":
        return "text-green-600";
      case "Coming":
        return "text-orange-600";
      case "New Listed":
        return "text-pink-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow min-h-[280px] flex flex-col">
      {/* Header with logo and company name */}
      <div className="flex items-center mb-3">
        {company_logo ? (
          <div className="w-12 h-12 bg-white border rounded-sm mr-3 flex items-center justify-center">
            <img
              src={company_logo}
              alt={`${company_name} logo`}
              className="w-10 h-10 object-contain"
            />
          </div>
        ) : (
          <div className="w-12 h-12 bg-gray-100 rounded-sm mr-3 flex items-center justify-center">
            <span className="text-gray-400 text-xs font-bold">
              {company_name?.charAt(0) || "?"}
            </span>
          </div>
        )}
        <div>
          <h3 className="font-semibold text-gray-800 text-sm leading-tight">
            {company_name || "Company Name"}
          </h3>
          <span className={`text-xs font-medium ${getStatusColor(status)}`}>
            {status || "Not Available"}
          </span>
        </div>
      </div>

      {/* IPO Details */}
      <div className="space-y-2 text-xs text-gray-600 mb-4 flex-grow">
        <div className="flex justify-between">
          <span className="font-medium">PRICE BAND</span>
          <span className="font-medium">OPEN</span>
          <span className="font-medium">CLOSE</span>
        </div>
        <div className="flex justify-between text-gray-800 font-medium">
          <span>{price_band || "Not Issued"}</span>
          <span>{formatDate(open_date)}</span>
          <span>{formatDate(close_date)}</span>
        </div>
        
        <div className="flex justify-between mt-3">
          <span className="font-medium">ISSUE SIZE</span>
          <span className="font-medium">ISSUE TYPE</span>
          <span className="font-medium">LISTING DATE</span>
        </div>
        <div className="flex justify-between text-gray-800 font-medium">
          <span>{issue_size ? `${issue_size} Cr.` : "Not Issued"}</span>
          <span>{issue_type || "Book Built"}</span>
          <span>{formatDate(listing_date)}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 mt-auto">
        <button className="border border-blue-500 text-blue-500 px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-50 transition-colors">
          RHP
        </button>
          <a
  href={drhp_pdf}
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-1 bg-red-500 text-white rounded font-medium text-sm text-center inline-block"
>
  DRHP
</a>

      </div>
    </div>
  );
};

export default IPOCard;
