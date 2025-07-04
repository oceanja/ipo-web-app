import React from "react";



const SharkCard = ({ name, image, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center space-y-3">

      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto"
      />

   
      <h3 className="font-bold text-lg text-gray-800">{name}</h3>

 
      <p className="text-sm text-gray-500 line-clamp-2">{description}</p>


      <button className="bg-indigo-500 text-white py-1 px-4 rounded hover:bg-indigo-600">
        View Holdings
      </button>
    </div>
  );
};

export default SharkCard;
