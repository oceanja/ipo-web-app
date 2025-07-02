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

      <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700 mb-4">
        <p className="font-medium">Price Band</p>
        <p>{priceBand}</p>

        <p className="font-medium">Open</p>
        <p>{open}</p>

        <p className="font-medium">Close</p>
        <p>{close}</p>

        <p className="font-medium">Issue Size</p>
        <p>{size}</p>

        <p className="font-medium">Issue Type</p>
        <p>{type}</p>

        <p className="font-medium">Listing Date</p>
        <p>{listing}</p>
      </div>

      <div className="flex gap-3 mt-2">
        <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded font-medium text-sm">
          RHP
        </button>
        <button className="px-4 py-1 bg-red-500 text-white rounded font-medium text-sm">
          DRHP
        </button>
      </div>
    </div>
  );
};

export default IPOCard;
