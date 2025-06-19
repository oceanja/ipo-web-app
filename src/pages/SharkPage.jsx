import React from "react";
import SharkList from "../components/SharkList"; // Imports the SharkList component to display investor cards

/**
 * SharkPage Component
 * Serves as the main page for displaying a list of prominent shark investors.
 * Includes optional search input (currently non-functional) and a heading/description section.
 */
const SharkPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Page heading */}
      <h2 className="text-2xl font-bold mb-1">Shark Investors</h2>

      {/* Short description below the heading */}
      <p className="text-sm text-gray-500 mb-6 font-bold">
        Look into the portfolio of these Super Investors to find out their favourite stocks.
      </p>

      {/* Optional search input for filtering sharks (functionality can be added later) */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="eg: Damani"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Render the list of shark investor cards */}
      <SharkList />
    </div>
  );
};

export default SharkPage;
