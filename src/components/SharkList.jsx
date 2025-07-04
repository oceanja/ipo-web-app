import React from "react";
import SharkCard from "./SharkCard"; 
import rakeshImg from '../assets/Rakesh Jhunjhunwala.png';
import anilImg from '../assets/Anil Goel.png';


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


const SharkList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    
      {sharkData.map((shark, index) => (
        <SharkCard key={index} {...shark} />
      ))}
    </div>
  );
};

export default SharkList;
