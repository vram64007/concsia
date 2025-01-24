"use client";
import USMap from "./us_map";

const USMapPage = () => {
  const handleStateClick = (stateName: string) => {
    alert(`You clicked on ${stateName}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">US Map</h1>
      <USMap onStateClick={handleStateClick} />
    </div>
  );
};

export default USMapPage;
