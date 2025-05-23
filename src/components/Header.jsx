import  { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle menu toggle and scroll lock
  const toggleMenu = (shouldOpen) => {
    setIsOpen(shouldOpen);
    if (shouldOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/aboutme" },
    { label: "Tools and Technologies", link: "tools" },
    // { label: "Experience", link: "/" },
    { label: "Projects", link: "/projects" },
    // { label: "Achievements", link: "/achievements" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full h-16 z-50 transition duration-300 px-[4vw] md:px-[6vw] lg:px-[10vw] ${
          isScrolled
            ? "bg-[#050414] bg-opacity-50 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="w-full text-white py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-semibold cursor-pointer">
            <a href="/">
              <span className="text-[#8245ec]">&lt;</span>
              <span className="text-white">Kapil</span>
              <span className="text-[#8245ec]">/</span>
              <span className="text-white">Agrawal</span>
              <span className="text-[#8245ec]">&gt;</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="cursor-pointer hover:text-[#8245ec]"
              >
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => toggleMenu(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => toggleMenu(true)}
              />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Items */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => toggleMenu(false)}
          />

          {/* Menu Content */}
          <div className="fixed left-1/2 top-20 transform -translate-x-1/2 w-4/5 bg-[#050414]/60 backdrop-blur-xl z-50 rounded-lg shadow-lg md:hidden border border-purple-500/20">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="cursor-pointer hover:text-[#8245ec] transition-colors duration-300 w-full text-center py-2"
                  onClick={() => toggleMenu(false)}
                >
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
