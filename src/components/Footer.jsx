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
            <Linkedin className="w-5 hover:text-white hover:scale-150 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ig_kapil_agrawal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 hover:text-white hover:scale-150 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a
            href="mailto:kapilagrawal448@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 hover:text-white hover:scale-150 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KapilAgrawal2005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 hover:text-white hover:scale-150 transition-transform duration-300" />
          </a>
        </li>
      </ul>
      <p className="text-gray-300 py-4">
        Copyright © 2024 || Kapil Agrawal All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
