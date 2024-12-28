"use client";

import React, { useState } from "react";

const IconWithTooltip = ({ icon, tooltip, href }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <div
      className="z-10 relative flex items-center justify-center text-[#acacac] group"
      onMouseEnter={() => setIsTooltipOpen(true)}
      onMouseLeave={() => setIsTooltipOpen(false)}
    >
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="group-hover:text-[#187EA7]"
        >
          {icon}
        </a>
      ) : (
        <button className="group-hover:text-[#187EA7]">{icon}</button>
      )}

      {/* Tooltip */}
      <div
        className={`font-serif absolute bottom-full mb-2 bg-[#fff] text-black text-sm px-3 py-1 rounded shadow-lg transition-transform duration-300 transform origin-bottom ${
          isTooltipOpen ? "scale-100 translate-y-0" : "scale-0 translate-y-4"
        }`}
        style={{
          whiteSpace: "nowrap",
        }}
      >
        {tooltip}
      </div>
    </div>
  );
};

export default IconWithTooltip;
