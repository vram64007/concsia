"use client";

import Navbar from "../../components/navbar";
import USMap from "../../components/us_map";
import { redirect } from "next/navigation";

const USMapPage = () => {
  const handleStateClick = (stateName: string) => {
    redirect("/states/" + stateName);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
        <h1 className="text-2xl font-bold mb-4">States</h1>
        <h5 className="text-base text-gray-200">
          Click on your state to connect with others and find ways to
          contribute!
        </h5>
        <USMap onStateClick={handleStateClick} />
      </div>
    </>
  );
};

export default USMapPage;
