import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ChevronDown, User, Code, Heart } from "lucide-react";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import Interests from "./Interests";

const sections = [
  {
    id: "personal",
    title: "Personal Info",
    component: PersonalInfo,
    icon: User,
  },
  { id: "skills", title: "Skills", component: Skills, icon: Code },
  { id: "interests", title: "Interests", component: Interests, icon: Heart },
];

export default function AboutMe() {
  const [activeSection, setActiveSection] = useState("personal");
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }));
  }, [controls]);

  return (
    <div className="min-h-screen text-white p-8 overflow-hidden">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-12 text-[#1B6B9A]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="mb-6"
            custom={index}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
          >
            <motion.button
              onClick={() =>
                setActiveSection(activeSection === section.id ? "" : section.id)
              }
              className="w-full text-left bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors duration-300 rounded-lg p-4 flex justify-between items-center overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl font-semibold flex items-center">
                <motion.div
                  className="mr-3"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeSection === section.id ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <section.icon size={24} />
                </motion.div>
                {section.title}
              </span>
              <motion.div
                animate={{ rotate: activeSection === section.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown />
              </motion.div>
            </motion.button>
            <AnimatePresence>
              {activeSection === section.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.div
                    className="bg-white bg-opacity-5 rounded-lg mt-2 p-4"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <section.component />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
