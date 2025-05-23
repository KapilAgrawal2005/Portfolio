"use client";

import { useState } from "react";
import js from "../assets/icons/js.png";
import java from "../assets/icons/java.png";
import react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.webp";
import html from "../assets/icons/html.png";
import tailwind from "../assets/icons/tailwind.png";
import c from "../assets/icons/c.png";
import python from "../assets/icons/python.png";
import node from "../assets/tech_logo/nodejs.png";
import mc from "../assets/tech_logo/mc.png";
import android from "../assets/icons/andriod.png";
import express from "../assets/tech_logo/express.png";

const technologies = [
  { name: "JavaScript", icon: js },
  { name: "HTML5", icon: html },
  { name: "Java", icon: java },
  { name: "React.js", icon: react },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "C++", icon: c },
  { name: "Python", icon: python },
  { name: "Android Studio", icon: android },
  { name: "Redux", icon: redux },
  { name: "Node.js", icon: node },
  { name: "MongoDB", icon: mc },
  { name: "Express.js", icon: express },
];

function TechIcon({ name, icon }) {
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

export default function ToolsAndTechnologies() {
  return (
    <div className="p-8 my-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-500 mb-12">
          Tools and Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {technologies.map((tech) => (
            <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
