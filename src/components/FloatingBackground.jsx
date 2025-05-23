import React from "react";

const FloatingBackground = () => {
  const shapes = Array(7).fill(null);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((_, index) => {
        const randomX = Math.random() * 100 - 50;
        const randomY = Math.random() * 100 - 50;
        const randomScale = Math.random() + 0.5;
        const randomOpacity = Math.random() * 0.5;
        const duration = Math.random() * 10 + 10;

        return (
          <div
            key={index}
            className="absolute bg-[#8245ec] rounded-full opacity-10 animate-float"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${duration}s infinite alternate`,
              "--random-x": `${randomX}px`,
              "--random-y": `${randomY}px`,
              "--random-scale": randomScale,
              "--random-opacity": randomOpacity,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingBackground;
