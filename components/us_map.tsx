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
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    // Load and render the map
    const renderMap = async () => {
      const svg = d3.select(svgRef.current);
      const width = window.innerWidth * 0.9; // Adjust width to take up most of the screen
      const height = window.innerHeight * 0.8; // Adjust height to take up most of the screen

      // Clear any existing content
      svg.selectAll("*").remove();

      // Set up projection and path generator
      const projection = d3
        .geoAlbersUsa()
        .translate([width / 2, height / 2])
        .scale(1200);
      const pathGenerator = d3.geoPath().projection(projection);

      // Set SVG dimensions
      svg.attr("width", width).attr("height", height);

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
          setTooltipPosition({ x: event.pageX, y: event.pageY });
        })
        .on("mouseout", () => {
          setHoveredState(null);
          setTooltipPosition(null);
        })
        .on("click", (event, d: any) => {
          if (onStateClick) onStateClick(d.properties.NAME); // Use "NAME" for click event
        });
    };

    renderMap();

    // Update map dimensions on window resize
    const handleResize = () => {
      renderMap();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onStateClick]);

  return (
    <div className="flex flex-col items-center">
      {/* SVG Map */}
      <svg ref={svgRef} />

      {/* Tooltip */}
      {hoveredState && tooltipPosition && (
        <div
          className="absolute bg-gray-700 text-white text-sm px-2 py-1 rounded shadow-md"
          style={{
            left: tooltipPosition.x + 10,
            top: tooltipPosition.y + 10,
            pointerEvents: "none",
          }}
        >
          {hoveredState}
        </div>
      )}
    </div>
  );
};

export default USMap;
