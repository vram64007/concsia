"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

// Props interface for state click handling
interface USMapProps {
  onStateClick?: (stateName: string) => void;
}

const USMap: React.FC<USMapProps> = ({ onStateClick }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  useEffect(() => {
    // Load and render the map
    const renderMap = async () => {
      const svg = d3.select(svgRef.current);
      const width = 800;
      const height = 500;

      // Clear any existing content
      svg.selectAll("*").remove();

      // Set up projection and path generator
      const projection = d3
        .geoAlbersUsa()
        .translate([width / 2, height / 2])
        .scale(1000);
      const pathGenerator = d3.geoPath().projection(projection);

      // Load GeoJSON data
      const geoData = await d3.json("/us-states.json"); // Place this file in your public folder

      // Draw map
      svg
        .selectAll(".state")
        .data((geoData as any).features)
        .join("path")
        .attr("class", "state")
        .attr("d", pathGenerator as any)
        .attr("fill", "#D6D6DA")
        .attr("stroke", "#333")
        .on("mouseover", (event, d: any) => {
          setHoveredState(d.properties.NAME); // Use "NAME" for state name
        })
        .on("mouseout", () => {
          setHoveredState(null);
        })
        .on("click", (event, d: any) => {
          if (onStateClick) onStateClick(d.properties.NAME); // Use "NAME" for click event
        });
    };

    renderMap();
  }, [onStateClick]);

  return (
    <div className="flex flex-col items-center">
      <svg
        ref={svgRef}
        width={800}
        height={500}
        className="border border-gray-300"
      />
      {hoveredState && (
        <div className="mt-2 text-gray-700">
          Hovered State: <strong>{hoveredState}</strong>
        </div>
      )}
    </div>
  );
};

export default USMap;
