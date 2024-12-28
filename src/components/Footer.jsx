import React from "react";
import logo from "../assets/images/logo.png";
import {
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Youtube,
  Github,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-end pb-10 ">
      <p className="text-xs text-gray-300">Kapil Agrawal © 2024</p>
      <div className="black-logo my-4">
        <img src={logo} className="h-[80px]" />
      </div>
      <ul className="mx-auto flex items-center justify-center gap-6 text-[#b0b2c3]">
        <li>
          <a
            href="https://www.linkedin.com/in/kapil-agrawal-93069a284/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 hover:text-white" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ig_kapil_agrawal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 hover:text-white" />
          </a>
        </li>
        <li>
          <a
            href="mailto:kapilagrawal448@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 hover:text-white" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KapilAgrawal2005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 hover:text-white" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
