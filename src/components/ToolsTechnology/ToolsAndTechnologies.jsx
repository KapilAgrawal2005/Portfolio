import React from "react";
import { TechIcon } from "./TechIcon";
import js from "../../assets/icons/js.png";
import java from "../../assets/icons/java.png";
import react from "../../assets/icons/react.png";
import redux from "../../assets/icons/redux.webp";
import html from "../../assets/icons/html.png";
import tailwind from "../../assets/icons/tailwind.png";
import c from "../../assets/icons/c.png";
import python from "../../assets/icons/python.png";
import android from "../../assets/icons/andriod.png";

const technologies = [
  { name: "JavaScript", icon: js },
  { name: "HTML5", icon: html },
  { name: "Java", icon: java },
  { name: "React", icon: react },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "C++", icon: c },
  { name: "Python", icon: python },
  { name: "Android Studio", icon: android },
  { name: "Redux", icon: redux },
];

export default function ToolsAndTechnologies() {
  return (
    <div className=" p-8 my-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1A709E] mb-12">
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
