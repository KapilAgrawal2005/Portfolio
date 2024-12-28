"use client";

import { useState } from "react";

export function TechIcon({ name, icon }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative border rounded-full p-4"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      <div
        className="w-24 h-24 rounded-full bg-[#001219] border border-gray-800 hover:border-gray-600 transition-colors cursor-pointer flex items-center justify-center group"
        role="img"
        aria-label={name}
      >
        <div className="w-12 h-12 flex items-center justify-center">
          <img
            src={icon}
            alt=""
            className="w-full h-full object-contain z-10"
          />
        </div>
      </div>
      <div
        className={`transition-transform duration-500 ${
          showTooltip ? "-translate-y-6 opacity-1" : "translate-y-0 opacity-0"
        }`}
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-20 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap"
          role="tooltip"
        >
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
          {name}
        </div>
      </div>
    </div>
  );
}
