import React from "react";
import SharkCard from "./SharkCard"; // Reusable card component for displaying individual shark info
import rakeshImg from '../assets/Rakesh Jhunjhunwala.png';
import anilImg from '../assets/Anil Goel.png';

/**
 * Sample data for sharks.
 * Each object contains name, image, and description for a shark.
 */
const sharkData = [
  {
    name: "Rakesh Jhunjhunwala",
    image: rakeshImg,
    description: "He started investing in the 90’s. His investment strategy...",
  },
  {
    name: "Anil Goel",
    image: anilImg,
    description: "He started investing in the 90’s. His investment strategy...",
  },
];

/**
 * SharkList Component
 * Renders a responsive grid of SharkCard components using the provided sharkData array.
 */
const SharkList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Iterates through each shark in sharkData and renders a SharkCard */}
      {sharkData.map((shark, index) => (
        <SharkCard key={index} {...shark} />
      ))}
    </div>
  );
};

export default SharkList;
