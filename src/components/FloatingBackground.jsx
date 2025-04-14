import React from "react";
import { motion } from "framer-motion";

const FloatingBackground = () => {
  const shapes = Array(5).fill(null);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((_, index) => (
        <motion.div
          key={index}
          className="absolute bg-[#69d9ff] rounded-full opacity-10"
          style={{
            width: Math.random() * 100 + 20,
            height: Math.random() * 100 + 20,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, Math.random() + 0.5],
            opacity: [0.1, Math.random() * 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBackground;
