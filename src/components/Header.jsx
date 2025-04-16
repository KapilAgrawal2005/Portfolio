"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const navigationText = [
  { link: "/", text: "Home" },
  { link: "/aboutme", text: "About Me" },
  { link: "/projects", text: "Projects" },
  { link: "/tools", text: "Tools and Technologies" },
  {
    link: "https://wa.me/7340194848?text=Hi, How are you?",
    text: "WhatsApp",
    icon: <FaWhatsapp className="text-xl" />,
    external: true,
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-10 flex items-center justify-between w-full px-4 lg:px-10 max-w-screen-xl mx-auto pt-3 pb-3 gap-10 md:gap-12 lg:gap-20">
      <a href="/" className="flex items-center">
        <p className="text-2xl md:text-3xl text-[#36bdf3] font-bold hover:text-[#69d4ff]">
          Kapil Agrawal
        </p>
      </a>

      <nav className="hidden md:flex gap-10 items-center pt-3">
        {navigationText.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target={item.external ? "_blank" : "_self"}
            rel={item.external ? "noopener noreferrer" : ""}
            className={`hover:text-[#187EA7] transition-colors text-2xl ${
              item.icon ? "flex items-center gap-1" : ""
            }`}
          >
            {item.icon}
            {item.text}
          </a>
        ))}
      </nav>

      <button
        className="md:hidden hover:text-[#187EA7]"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#111111]/70 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-5">
          <button
            className="self-end mb-5 h-10 w-10 text-[#fff] hover:text-[#000] p-2 bg-[#187EA7] rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            ✕
          </button>

          <div className="flex flex-col gap-4">
            {navigationText.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                className={`hover:text-[#187EA7] transition-colors py-2 ${
                  item.icon ? "flex items-center gap-2" : ""
                }`}
                onClick={toggleMenu}
              >
                {item.icon}
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
