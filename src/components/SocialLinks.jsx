import { Linkedin, Instagram, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
const SocialLinks = () => {
  return (
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
      <ul className="hidden md:flex flex-col space-y-6 text-[#b0b2c3] pr-2">
        <li>
          <a
            href="https://www.linkedin.com/in/kapil-agrawal-93069a284/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 transition-colors duration-300"
          >
            <Linkedin className="w-7 h-7 hover:scale-150 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KapilAgrawal2005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 transition-colors duration-300"
          >
            <FaGithub className="w-7 h-7 hover:scale-150 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ig_kapil_agrawal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 transition-colors duration-300"
          >
            <Instagram className="w-7 h-7 hover:scale-150 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a
            href="mailto:kapilagrawal448@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors duration-300"
          >
            <Mail className="w-7 h-7 hover:scale-150 transition-transform duration-300" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
