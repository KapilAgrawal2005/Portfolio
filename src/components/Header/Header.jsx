import React from "react";
import { Phone, User, Home, FolderOpen, Wrench } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import IconWithTooltip from "./IconWithTooltip";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="z-10 pointer-events-none flex items-center justify-between gap-8 w-full px-4 max-w-screen-xl mx-auto pr-12 pt-3">
      <a href="/">
        <img
          src={logo}
          alt="Logo"
          width={80}
          height={80}
          className="pointer-events-auto"
        />
      </a>

      <div className="flex gap-6 pointer-events-auto text-[#fff]">
        <IconWithTooltip
          icon={
            <a href="/">
              <Home />
            </a>
          }
          tooltip="Home"
        />
        <IconWithTooltip
          icon={
            <a href="/aboutme">
              <User />
            </a>
          }
          tooltip="About Me"
        />
        <IconWithTooltip
          icon={
            <a href="/projects">
              <FolderOpen />
            </a>
          }
          tooltip="Projects"
        />
        <IconWithTooltip
          icon={
            <a href="/tools">
              <Wrench />
            </a>
          }
          tooltip="Tools and Technologies"
        />
        {/* <IconWithTooltip
          icon={<Phone />}
          tooltip="Phone"
          href="tel:7340194848"
        /> */}
        <IconWithTooltip
          icon={<FaWhatsapp className="text-2xl" />}
          tooltip="WhatsApp"
          href="https://wa.me/7340194848?text=Hi, How are you?"
        />
      </div>
    </header>
  );
};

export default Header;
