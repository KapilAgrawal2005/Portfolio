import React from "react";
import ProjectCard from "./ProjectCard";
import uas from "../../assets/images/UAS.png";
import portfolio from "../../assets/images/Portfolio.png";

const Projects = () => {
  const projects = [
    {
      title: "UAS NMIMS",
      subtitle: "(Club Based App)",
      description:
        "This app mainly developed for managing the club activities, meetings and  flights for every member with authentication facility and it keep track of past activities, meetings and  flights using firebase database.",
      image: uas,
      link: "/",
      color: "#459bd5",
      tags: [
        "#androidstudio",
        "#java",
        "#kotlin",
        "#firebasedatabase",
        "#authentication",
        "#database",
        "#figma",
      ],
    },
    {
      title: "Portfolio",
      subtitle: "(Personal Website)",
      description:
        "This is my personal portfolio website, where I showcase my projects, skills, and experiences. It's designed to provide an overview of my work and help visitors learn more about me. The site is built using React.js, Tailwind CSS, and deployed on Vercel.",
      image: portfolio,
      link: "#",
      color: "#ffe578",
      tags: [
        "#react.js",
        "#vercel",
        "#redux",
        "#tailwind",
        "#css",
        "#javascript",
        "#figma",
      ],
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
      <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
        Projects
      </h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
      <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default Projects;
