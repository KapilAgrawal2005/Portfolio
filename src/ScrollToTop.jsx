"use client";

import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} aria-label="Scroll to top">
      <FaArrowUp className="font-extrabold h-10 w-10 text-[#fff] hover:text-[#8245ec] fixed bottom-5 right-5 p-2 bg-[#8245ec] rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 z-10" />
    </button>
  );
}
