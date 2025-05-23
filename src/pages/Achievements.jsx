"use client";

const achievements = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2023",
    description:
      "Completed comprehensive web development course covering HTML, CSS, JavaScript, React, and Node.js",
    image: "/certificates/web-dev-cert.jpg",
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    issuer: "Coursera",
    date: "2023",
    description:
      "Mastered advanced data structures and algorithms with practical implementation",
    image: "/certificates/dsa-cert.jpg",
  },
  {
    id: 3,
    title: "React Advanced Patterns",
    issuer: "Frontend Masters",
    date: "2023",
    description:
      "Learned advanced React patterns and best practices for scalable applications",
    image: "/certificates/react-cert.jpg",
  },
  // Add more achievements as needed
];

const AchievementCard = ({ achievement }) => {
  return (
    <div className="bg-[#0d081f] rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d081f] to-transparent" />
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
    <div className="min-h-screen bg-[#050414] py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-4000" />
      </div>

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
