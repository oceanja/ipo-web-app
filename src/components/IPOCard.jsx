import React from 'react';

const IPOCard = ({ name, priceLow, priceHigh, open, close, size, type, listing }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 border">
      {/* Company Name */}
      <h2 className="text-xl font-semibold text-blue-700 mb-6">{name}</h2>

      {/* First Row: Price Band, Open, Close */}
      <div className="flex justify-between mb-6 gap-x-8">
        {/* Each item is a vertical flex */}
        <div className="flex flex-col items-center text-gray-800">
          <span className="mb-1">Price Band</span>
          <span className="text-gray-900 font-semibold">₹{priceLow} – ₹{priceHigh}</span>
        </div>
        <div className="flex flex-col items-center text-gray-800">
          <span className="mb-1">Open</span>
          <span className="text-gray-900 font-semibold">{open}</span>
        </div>
        <div className="flex flex-col items-center text-gray-800">
          <span className="mb-1">Close</span>
          <span className="text-gray-900 font-semibold">{close}</span>
        </div>
      </div>

      {/* Second Row: Issue Size, Issue Type, Listing Date */}
      <div className="flex justify-between gap-x-8 text-gray-800">
        <div className="flex flex-col items-center">
          <span className="mb-1">Issue Size</span>
          <span className="text-gray-900 font-semibold">₹{size} Cr</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-1">Issue Type</span>
          <span className="text-gray-900 font-semibold">{type}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-1">Listing Date</span>
          <span className="text-gray-900 font-semibold">{listing}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="px-4 py-1 bg-blue-100 text-blue-700 rounded border border-blue-500 font-semibold">
          RHP
        </button>
        <button className="px-4 py-1 bg-red-500 text-white rounded font-semibold">
          DRHP
        </button>
      </div>
    </div>
  );
};

export default IPOCard;
