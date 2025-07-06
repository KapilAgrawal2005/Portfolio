"use client";
import { FaAward, FaLink } from "react-icons/fa";
import GDSC from "../assets/images/GDSC.jpg";
import mysql from "../assets/images/mysql.png";
import IBM from "../assets/images/IBM.png";
import Java from "../assets/images/Java.png";
import node from "../assets/images/node.png";
import react from "../assets/images/react.png";
import arvr from "../assets/images/arvr.png";
import ai from "../assets/images/ai.png";
import codersarena from "../assets/images/codersarena.jpg";
import yugantar from "../assets/images/yugantar.png";

const achievements = [
  {
    title: "YUGANTAR Hackathon winning Certificate",
    issuer: "NMIMS MPSTME",
    date: "2025",
    description:
      "Won the 24 hour YUGANTAR Hackathon 2025 With the 1st rank and made a job portal according to the problem statement.",
    image: yugantar,
  },
  {
    title: "Coders Arena - DSA Faceoff Certificate",
    issuer: "Devantra Community",
    date: "2025",
    description:
      "Participated in national level DSA MCQ face of competition and cleared the round one among 6000+ participations",
    image: codersarena,
  },
  {
    title: "MySql Certificate",
    issuer: "Scaler",
    date: "2025",
    description:
      "In recognition of the completion of the tutorial: SQL for Beginners: Learn SQL using MySQl and Database Design Course.",
    image: mysql,
  },
  {
    title: "React Advanced Patterns",
    issuer: "Cousera",
    date: "2025",
    description:
      "Mastered advanced React concepts including hooks, context API, state management, and performance optimization techniques.",
    image: react,
  },
  {
    title: "Node.js Development",
    issuer: "Cousera",
    date: "2025",
    description:
      "Completed comprehensive Node.js course covering server-side JavaScript, Express framework, and building RESTful APIs.",
    image: node,
  },
  {
    title: "Bring AI to Work",
    issuer: "Google Workspace",
    date: "2025",
    description: "Completed the workshop for bringing AI to your daily works.",
    image: ai,
  },
  {
    title: "IBM Data Science Datathon",
    issuer: "IBM",
    date: "2024",
    description:
      "Participated in IBM's Datathon, applying data science techniques to solve real-world problems and analyze complex datasets.",
    image: IBM,
  },
  {
    title: "Google Developer Student Club",
    issuer: "Google",
    date: "2023",
    description:
      "Active member of GDSC, participating in workshops and collaborative projects to enhance technical skills and community engagement.",
    image: GDSC,
  },

  {
    title: "Java Basic Certification",
    issuer: "Hacker Rank",
    date: "2023",
    description:
      "Earned Java programming certification demonstrating proficiency in core Java concepts, object-oriented programming, and application development.",
    image: Java,
  },

  {
    title: "AR/VR Development Fundamentals",
    issuer: "College",
    date: "2023",
    description:
      "Learned fundamentals of Augmented and Virtual Reality development, including 3D modeling, spatial computing, and immersive experiences.",
    image: arvr,
  },
];

const AchievementCard = ({ achievement }) => {
  return (
    <div className="bg-[#0d081f] rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group transform hover:-translate-y-1">
      <div className="relative bg-white/5 p-4 flex items-center justify-center min-h-[200px]">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="max-w-full max-h-[180px] object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d081f]/20 to-transparent pointer-events-none" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-white group-hover:text-purple-500 transition-colors duration-300">
            {achievement.title}
          </h3>
          <span className="text-sm text-purple-500">{achievement.date}</span>
        </div>
        <p className="text-purple-400 mb-4">{achievement.issuer}</p>
        <p className="text-gray-400">{achievement.description}</p>
      </div>
    </div>
  );
};

export default function Achievements() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 transform transition-all duration-500">
          <h1 className="text-4xl font-bold text-white mb-4">
            My Achievements
          </h1>
          <div className="w-32 h-1 bg-purple-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of my certifications and accomplishments that showcase
            my journey in technology and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
}
