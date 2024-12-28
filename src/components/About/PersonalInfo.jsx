import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineVariants = {
  hidden: { height: 0 },
  visible: { height: "100%", transition: { duration: 0.5 } },
};

const nodeVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

const TimelineNode = ({ children }) => (
  <motion.div className="relative" variants={itemVariants}>
    <motion.div
      className="absolute left-0 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]"
      variants={nodeVariants}
    />
    <motion.div
      className="absolute left-[7px] top-4 h-full w-[2px] bg-blue-500"
      variants={lineVariants}
    />
    <motion.div
      className="ml-8"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </motion.div>
  </motion.div>
);

export default function PersonalInfo() {
  return (
    <div className="min-h-screen  p-8 text-gray-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-4xl"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <motion.h2
            className="text-4xl font-bold text-[#1B6B9A]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Kapil Agrawal
          </motion.h2>
          <motion.p
            className="mt-2 text-xl text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Frontend Developer & UI/UX Enthusiast
          </motion.p>
          <motion.div
            className="mt-4 space-y-2 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>📍 Jaipur, Rajasthan, India</p>
            <p>📧 kapilagrawal448@gmail.com</p>
            <p className="mt-4 text-gray-300">
              A passionate developer with a new mindset as a fresher in creating
              beautiful and functional web applications. I love turning complex
              problems into simple, elegant solutions.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="relative space-y-12 pl-4"
        >
          <TimelineNode>
            <motion.div
              className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-6 backdrop-blur-sm"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="text-2xl font-semibold text-[#1B6B9A]">
                Technical Team Member at GDSC MPSTME Shirpur
                <span className="ml-2 text-sm text-gray-400">
                  (2023 - 2024)
                </span>
              </h3>
              <p className="mt-2 text-gray-300">
                In August 2023, I became the Technical Team Member of GDSC for
                our campus. I helped and provided technical support in managing
                the Code Kraken hackathon, participated in Google Cloud
                workshops, and taught 9th-10th grade students about technology
                to inspire their interest.
              </p>
            </motion.div>
          </TimelineNode>

          <TimelineNode>
            <motion.div
              className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-6 backdrop-blur-sm"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="text-2xl font-semibold text-[#1B6B9A]">
                Student at MPSTME, Shirpur
                <span className="ml-2 text-sm text-gray-400">
                  (2022 - Present)
                </span>
              </h3>
              <p className="mt-2 text-gray-300">
                I am currently pursuing a Bachelor of Technology in Computer
                Engineering at MPSTME, Shirpur. I have a CGPA of 3.58 out of 4
                and I am also actively learning new technology and enhancing my
                skills.
              </p>
            </motion.div>
          </TimelineNode>
        </motion.div>
      </motion.div>
    </div>
  );
}
