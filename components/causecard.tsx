"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NewspaperIcon, UserGroupIcon } from "@heroicons/react/24/outline";

interface CauseItem {
  text: string;
  link: string;
}

export interface Cause {
  id: string;
  title: string;
  description: string;
  items: CauseItem[];
  icon: React.ReactNode;
}

interface CausesCardProps {
  cause: Cause;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

const CausesCard: React.FC<CausesCardProps> = ({
  cause,
  onSelect,
  isSelected,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ duration: 0.3 }}
      className={`
        relative 
        bg-gray-800 
        border 
        ${
          isSelected
            ? "border-blue-500 ring-2 ring-blue-500"
            : "border-gray-700"
        }
        rounded-xl 
        p-6 
        transform 
        transition-all 
        duration-300 
        cursor-pointer
        hover:shadow-lg
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(cause.id)}
    >
      {/* Cause Icon */}
      <div className="absolute top-4 right-4 text-blue-400 opacity-70">
        {cause.icon}
      </div>

      {/* Card Content */}
      <h2 className="text-2xl font-bold text-white mb-4">{cause.title}</h2>

      {/* Expandable Description */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isSelected ? "auto" : 0,
          opacity: isSelected ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-400 mb-4">{cause.description}</p>
        <ul className="space-y-2">
          {cause.items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200 hover:underline transition-colors"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default CausesCard;
