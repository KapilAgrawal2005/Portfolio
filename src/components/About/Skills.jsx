import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 70 },
  { name: "JavaScript", level: 75 },
  { name: "C++", level: 80 },
  { name: "HTML/CSS", level: 95 },
  { name: "Redux", level: 65 },
  { name: "Tailwind", level: 65 },
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Skills() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.h2
        variants={itemVariants}
        className="text-2xl font-semibold mb-4"
      >
        Technical Skills
      </motion.h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div key={skill.name} variants={itemVariants}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 bg-white bg-opacity-20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-300 to-cyan-800"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
