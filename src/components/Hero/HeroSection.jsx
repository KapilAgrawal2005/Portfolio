"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import photo from "../../assets/images/photo.jpg";
import AnimatedTitle from "./AnimatedTitle";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsExpanded(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    controls.start(isExpanded ? "expanded" : "collapsed");
  }, [isExpanded, controls]);

  const containerVariants = {
    collapsed: {
      flexDirection: "column",
    },
    expanded: {
      flexDirection: "column",
    },
  };

  const imageContainerVariants = {
    collapsed: {
      scale: 1,
    },
    expanded: {
      scale: isMobile ? 0.8 : 1,
    },
  };

  const infoVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      y: -20,
    },
    expanded: {
      height: "auto",
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="relative w-full h-auto flex items-center justify-center p-4 md:p-7">
      <motion.div
        className="relative flex flex-col items-center w-full max-w-4xl"
        variants={containerVariants}
        initial="collapsed"
        animate={controls}
        onMouseEnter={() => !isMobile && setIsExpanded(true)}
        onMouseLeave={() => !isMobile && setIsExpanded(false)}
        onClick={() => isMobile && setIsExpanded(!isExpanded)}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="relative mb-8"
          variants={imageContainerVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-purple-600 p-1"
              animate={{
                boxShadow: isExpanded
                  ? "0 0 25px 5px rgba(0, 255, 255, 0.5), 0 0 50px 10px rgba(128, 0, 128, 0.5)"
                  : "0 0 15px 2px rgba(0, 255, 255, 0.3), 0 0 30px 5px rgba(128, 0, 128, 0.3)",
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full blur-xl bg-gradient-to-br from-cyan-400 via-purple-500 to-purple-600"
                animate={{
                  scale: isExpanded ? 1.1 : 1.05,
                  opacity: isExpanded ? 0.7 : 0.5,
                }}
                transition={{ duration: 0.5 }}
              />
              <div className="relative h-full w-full rounded-full overflow-hidden bg-[#001219]">
                <img
                  src={photo}
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-md overflow-hidden"
          variants={infoVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-full rounded-2xl p-6 bg-[#001219]">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-white mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Kapil Agrawal
            </motion.h2>

            <AnimatedTitle isVisible={isExpanded} />

            <motion.p
              className="text-base md:text-lg text-gray-200 mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              A passionate developer crafting beautiful web experiences with
              modern technologies.
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#resume"
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-full hover:opacity-90 transition duration-300"
              >
                My Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <SocialLinks />
    </div>
  );
};

export default HeroSection;
