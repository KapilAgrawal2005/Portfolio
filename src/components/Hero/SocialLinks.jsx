import React from "react";
import { Linkedin, Twitter, Instagram, Mail, Github } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
      <ul className="flex flex-col space-y-6 text-[#b0b2c3]">
        <li>
          <a
            href="https://www.linkedin.com/in/kapil-agrawal-93069a284/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KapilAgrawal2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ig_kapil_agrawal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            href="mailto:kapilagrawal448@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
