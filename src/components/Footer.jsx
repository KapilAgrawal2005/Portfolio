import React from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Kapil Agrawal</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-8 mt-6">
          {[
            {
              icon: <Linkedin />,
              link: "https://www.linkedin.com/in/kapil-agrawal-93069a284/",
            },
            {
              icon: <Instagram />,
              link: "https://www.instagram.com/ig_kapil_agrawal/",
            },
            {
              icon: <Mail />,
              link: "mailto:kapilagrawal448@gmail.com",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/KapilAgrawal2005",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-6 w-6 text-xl hover:text-purple-500 transition-all hover:scale-150 duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Kapil Agrawal. All rights are reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
