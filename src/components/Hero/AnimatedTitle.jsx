"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedTitle = ({ isVisible }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Frontend Developer", "UI/UX Designer", "Problem Solver"];

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const sentenceAnimation = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="h-10 relative overflow-hidden mb-6">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentIndex}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sentenceAnimation}
            className="absolute w-full text-center"
          >
            {titles[currentIndex].split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={letterAnimation}
                className="text-lg sm:text-xl md:text-2xl font-light inline-block text-white"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTitle;
