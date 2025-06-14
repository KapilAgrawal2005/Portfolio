"use client";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import dehix from "../assets/images/dehix.png";
import { MdWork, MdSchool } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Dehix",
    location: "Remote",
    duration: "May 2025 - Current",
    type: "internship",
    description:
      "Developed and maintained web applications using Next.js and Node.js. Collaborated with senior developers to implement new features and optimize existing codebase.",
    technologies: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "Git",
      "Nextjs",
      "Typescript",
    ],
    achievements: [
      "Improved my Communication skills.",
      "Learn managing both frontend and backend.",
      "Collaborated with a large team leading to increase in the teamwork skill.",
    ],
    companyLogo: dehix,
    companyWebsite: "https://dehix.org/",
  },
];

const ExperienceCard = ({ experience, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex items-center mb-12 ${
        isEven ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Timeline dot */}
      <div className="hidden lg:flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-[#050414]"></div>
      </div>

      {/* Content */}
      <div className={`w-full lg:w-5/12 ${isEven ? "lg:pr-8" : "lg:pl-8"}`}>
        <div className="bg-[#0d081f] rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group transform hover:-translate-y-1 p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                {experience.type === "internship" ? (
                  <MdSchool className="text-purple-500 text-xl" />
                ) : (
                  <MdWork className="text-purple-500 text-xl" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-500 transition-colors duration-300">
                  {experience.title}
                </h3>
                <div className="flex items-center space-x-2 text-purple-400">
                  {experience.companyWebsite && (
                    <a
                      href={experience.companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-300 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        {experience.company}
                        <FaExternalLinkAlt className="text-sm" />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                experience.type === "internship"
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-green-500/20 text-green-400"
              }`}
            >
              {experience.type === "internship" ? "Internship" : "Full-time"}
            </span>
          </div>

          {/* Duration and Location */}
          <div className="flex items-center space-x-4 mb-4 text-gray-400">
            <div className="flex items-center space-x-1">
              <FaCalendarAlt className="text-sm" />
              <span className="text-sm">{experience.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaMapMarkerAlt className="text-sm" />
              <span className="text-sm">{experience.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-4">{experience.description}</p>

          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-purple-400 mb-2">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-sm font-semibold text-purple-400 mb-2">
              Key Achievements:
            </h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, achIndex) => (
                <li
                  key={achIndex}
                  className="text-gray-400 text-sm flex items-start"
                >
                  <span className="text-purple-500 mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 transform transition-all duration-500">
          <h1 className="text-4xl font-bold text-white mb-4">My Experience</h1>
          <div className="w-32 h-1 bg-purple-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A journey through my professional experiences, internships, and the
            skills I've developed along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>

          {/* Experience cards */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-[#0d081f] rounded-xl border border-purple-500/20 p-8 max-w-2xl mx-auto">
            <FaBriefcase className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-400 mb-6">
              I'm always open to new opportunities and exciting projects. Let's
              discuss how we can collaborate!
            </p>
            <button
              onClick={handleGetInTouch}
              className="inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
