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
const achievements = [
  {
    id: 1,
    title: "MySql Certificate",
    issuer: "Scaler",
    date: "2025",
    description:
      "In recognition of the completion of the tutorial: SQL for Beginners: Learn SQL using MySQl and Database Design Course.",
    image: mysql,
  },
  {
    id: 2,
    title: "React Advanced Patterns",
    issuer: "Cousera",
    date: "2025",
    description:
      "Mastered advanced React concepts including hooks, context API, state management, and performance optimization techniques.",
    image: react,
  },
  {
    id: 3,
    title: "Node.js Development",
    issuer: "Cousera",
    date: "2025",
    description:
      "Completed comprehensive Node.js course covering server-side JavaScript, Express framework, and building RESTful APIs.",
    image: node,
  },
  {
    id: 4,
    title: "Bring AI to Work",
    issuer: "Google Workspace",
    date: "2025",
    description: "Completed the workshop for bringing AI to your daily works.",
    image: ai,
  },
  {
    id: 5,
    title: "IBM Data Science Datathon",
    issuer: "IBM",
    date: "2024",
    description:
      "Participated in IBM's Datathon, applying data science techniques to solve real-world problems and analyze complex datasets.",
    image: IBM,
  },
  {
    id: 6,
    title: "Google Developer Student Club",
    issuer: "Google",
    date: "2023",
    description:
      "Active member of GDSC, participating in workshops and collaborative projects to enhance technical skills and community engagement.",
    image: GDSC,
  },

  {
    id: 7,
    title: "Java Basic Certification",
    issuer: "Hacker Rank",
    date: "2023",
    description:
      "Earned Java programming certification demonstrating proficiency in core Java concepts, object-oriented programming, and application development.",
    image: Java,
  },

  {
    id: 8,
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
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
}
