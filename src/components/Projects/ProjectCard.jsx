import React from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative mx-2 ${
        isEven ? "" : "sm:flex-row-reverse"
      }`}
    >
      <div
        className={`h-[1px] ${
          isEven ? "left-1/4 right-1/2" : "left-1/2 right-1/4"
        } bg-[#1788ae] absolute top-1/2 hidden sm:block`}
      ></div>
      <div
        className={`w-4 h-4 rounded-full border-[3px] border-[${project.color}] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block`}
      ></div>
      <a
        href={project.link}
        className={`flex w-full relative justify-center sm:justify-start`}
      >
        <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
          <img
            className={`max-w-[500px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]`}
            src={project.image}
            alt={project.title}
          />
          <span
            className={`flex group-hover:-top-14 ease-jump duration-200 bg-[${project.color}] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2`}
          >
            {project.title}
            <ExternalLink size={16} />
          </span>
        </div>
      </a>

      <div className="w-full">
        <h3
          className={`text-[${project.color}] font-bold text-2xl md:text-4xl`}
        >
          {project.title}
        </h3>
        <span className={`text-[${project.color}] text-base md:text-lg`}>
          {project.subtitle}
        </span>
        <p className="text-justify text-sm md:text-base mt-2">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => (
            <li
              key={index}
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
