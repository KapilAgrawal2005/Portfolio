"use client";

import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} aria-label="Scroll to top">
      <ArrowUp className="h-10 w-10 text-[#fff] hover:text-[#000] fixed bottom-5 right-5 p-2 bg-[#187EA7] rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 z-10" />
    </button>
  );
}
