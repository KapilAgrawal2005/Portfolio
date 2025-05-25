import React from "react";
import ProjectCard from "./ProjectCard";
import uas from "../assets/images/UAS.png";
import hireway from "../assets/images/Hireway.png";
import portfolio from "../assets/images/Portfolio.png";
import lms from "../assets/images/lms.png";

const Projects = () => {
  const projects = [
    {
      title: "LMS",
      subtitle: "(A Library Management System)",
      description:
        " Developed a MERN Stack application with Admin and User roles, where Admins manage books/users and assign new Admins, while Users borrow/return books with fine calculations.",
      image: lms,
      // link: "https://hireway.vercel.app/",
      color: "#459bd5",
      tags: [
        "#nodejs",
        "#javascript",
        "#vercel",
        "#react",
        "#tailwind",
        "#api",
        "#mongodb",
        "#authentication",
        "authorization",
        "#database",
        "#express",
        "#restapi",
        "#jwt",
        "#bcryptjs",
        "#nodemon",
        "#cors",
      ],
      gitlink: "https://github.com/KapilAgrawal2005/Library-Management-System",
    },
    {
      title: "HireWay",
      subtitle: "(A Job Portal)",
      description:
        "This app provides a plateform for candidates or Job seekers as well as Recruiters. Recruiters can hire the best candidate and candidates can get hired in best companies.",
      image: hireway,
      link: "https://hireway.vercel.app/",
      color: "#459bd5",
      tags: [
        "#clerk",
        "#javascript",
        "#vercel",
        "#react",
        "#tailwind",
        "#api",
        "#supabase",
        "#authentication",
        "authorization",
        "#database",
      ],
      gitlink: "https://github.com/KapilAgrawal2005/HireWay",
    },
    {
      title: "Portfolio",
      subtitle: "(Personal Website)",
      description:
        "This is my personal portfolio website, where I showcase my projects, skills, and experiences. It's designed to provide an overview of my work and help visitors learn more about me. The site is built using React.js, Tailwind CSS, and deployed on Vercel.",
      image: portfolio,
      link: "https://kapil-agrawal.vercel.app/",
      color: "#ffe578",
      tags: [
        "#react.js",
        "#vercel",
        "#redux",
        "#tailwind",
        "#css",
        "#javascript",
      ],
      gitlink: "https://github.com/KapilAgrawal2005/Portfolio",
    },
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
      ],
      gitlink: "https://github.com/KapilAgrawal2005/UAS-NMIMS",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
      <h2 className="text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-purple-500 sm:border-b-2 border-purple-500 ">
        Projects
      </h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
      <div className="mt-[52px] w-[2px] hidden sm:block bg-purple-500 absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default Projects;
