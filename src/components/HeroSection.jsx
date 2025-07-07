import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import kapil from "../assets/images/kapil.png";
import SocialLinks from "./SocialLinks";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[4vw] md:px-[6vw] lg:px-[10vw] font-sans mt-4 md:mt-8 lg:mt-12"
    >
      <div className="flex flex-col-reverse md:flex-row justify-end items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Kapil Agrawal
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "App Developer",
                "UI/UX Designer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-6 mt-8 leading-relaxed">
            I am a full-stack developer skilled in both front-end and back-end
            development, I specialize in the MERN stack and other modern
            technologies to create seamless user experiences and efficient
            solutions.
          </p>
          {/* Resume Button */}
          <div className="mx-auto md:flex gap-5">
            <a
              href="https://drive.google.com/file/d/1Sh5SulZl2_n866JaiRGFl-oIEW-xYhVP/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              Resume
            </a>
            <a
              href="/aboutme"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              About Me
            </a>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          {/* Regular div for mobile */}
          <div className="lg:hidden w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[25rem] border-4 border-purple-700 rounded-full">
            <img
              src={kapil}
              alt="Kapil Agrawal"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
            {/* <SocialLinks /> */}
          </div>

          {/* Tilt effect for laptop and above */}
          <div className="hidden lg:block">
            <Tilt
              className="w-[22rem] h-[25rem] border-4 border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={kapil}
                alt="Kapil Agrawal"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
              <SocialLinks />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
