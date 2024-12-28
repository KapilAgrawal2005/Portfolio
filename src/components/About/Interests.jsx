import React from "react";
import { motion } from "framer-motion";

const interests = [
  "Web Development",
  "UI/UX Design",
  "Open Source",
  "Blockchain",
  "Photography",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function Interests() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.h2
        variants={itemVariants}
        className="text-2xl font-semibold mb-4"
      >
        Interests & Hobbies
      </motion.h2>
      <div className="flex flex-wrap gap-3">
        {interests.map((interest, index) => (
          <motion.span
            key={interest}
            variants={itemVariants}
            className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm cursor-pointer hover:bg-opacity-30 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {interest}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
