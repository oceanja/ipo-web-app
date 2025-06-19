import React from "react";

/**
 * SharkCard Component
 * Renders a card UI representing a shark with their name, image, description, and a call-to-action button.
 * 
 * Props:
 * - name: string – The name of the shark.
 * - image: string – URL to the shark's image.
 * - description: string – A short description about the shark.
 */
const SharkCard = ({ name, image, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center space-y-3">
      {/* Shark image displayed in a circular frame */}
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto"
      />

      {/* Shark name displayed as a bold heading */}
      <h3 className="font-bold text-lg text-gray-800">{name}</h3>

      {/* Shark description truncated to 2 lines for consistent layout */}
      <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

      {/* Call-to-action button for viewing shark's holdings */}
      <button className="bg-indigo-500 text-white py-1 px-4 rounded hover:bg-indigo-600">
        View Holdings
      </button>
    </div>
  );
};

export default SharkCard;
