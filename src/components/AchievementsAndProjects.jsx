import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import GDSC from "../assets/images/GDSC.jpg";
import IBM from "../assets/images/IBM.png";
import Java from "../assets/images/Java.png";
import HireWay from "../assets/images/Hireway.png";
import Portfolio from "../assets/images/Portfolio.png";
import UAS from "../assets/images/UAS.png";
const AchievementCard = ({ title, description, imageUrl }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-transform duration-300">
    <div className="flex flex-col items-center text-center gap-4">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full sm:h-22 md:h-34 lg:h-48 object-cover rounded-lg"
        />
      )}
      <div>
        <h3 className="text-xs font-semibold text-white">{title}</h3>
        <p className="text-gray-300 mt-1">{description}</p>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ title, description, imageUrl, link }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-transform duration-300">
    <div className="flex flex-col items-center text-center gap-4">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
      )}
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 mt-1">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-400 hover:text-blue-300"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  </div>
);

const AchievementsAndProjects = () => {
  const [activeTab, setActiveTab] = useState("achievements");

  const achievements = [
    {
      title: "IBM DATATHONE participation Certificate",
      imageUrl: IBM,
    },
    {
      title: "Java Basic Certificate ",
      imageUrl: Java,
    },
    {
      title: "Google Developer Student Club",
      imageUrl: GDSC,
    },
  ];

  const projects = [
    {
      title: "HireWay - A Job Portal",
      imageUrl: HireWay,
      link: "https://hireway.vercel.app/",
    },
    {
      title: "Personal Portfolio",
      imageUrl: Portfolio,
      link: "https://kapil-agrawal.vercel.app/",
    },
    {
      title: "UAS NMIMS",
      imageUrl: UAS,
      link: "https://github.com/KapilAgrawal2005/UAS-NMIMS",
    },
  ];

  return (
    <div className="py-16 px-[4vw] md:px-[6vw] lg:px-[10vw]">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 w-full">
          <div className="flex justify-around w-full">
            <button
              onClick={() => setActiveTab("achievements")}
              className={`text-2xl font-bold text-white relative pb-2 ${
                activeTab === "achievements"
                  ? "bg-purple-500 rounded-md px-4 py-2"
                  : ""
              }`}
            >
              Achievements
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`text-2xl font-bold text-white relative pb-2 ${
                activeTab === "projects"
                  ? "bg-purple-500 rounded-md px-4 py-2"
                  : ""
              }`}
            >
              Projects
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="relative">
          {/* Achievements Section */}
          <div
            className={`transition-all duration-300 ${
              activeTab === "achievements" ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} {...achievement} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <button
                className="px-6 py-3 text-white rounded-lg font-bold mt-12"
                style={{
                  background: "linear-gradient(90deg, #8245ec, #a855f7)",
                  boxShadow:
                    "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
                }}
              >
                View More Achievements
                <FaArrowRightLong className="inline -block ml-2 font-bold" />
              </button>
            </div>
          </div>

          {/* Projects Section */}
          <div
            className={`transition-all duration-300 ${
              activeTab === "projects" ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href="/projects">
                <button
                  className="px-6 py-3 text-white rounded-lg font-bold mt-12"
                  style={{
                    background: "linear-gradient(90deg, #8245ec, #a855f7)",
                    boxShadow:
                      "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
                  }}
                >
                  View More Projects
                  <FaArrowRightLong className="inline -block ml-2 font-bold" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsAndProjects;
