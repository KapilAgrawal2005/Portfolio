import {
  Linkedin,
  Mail,
  Globe,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import kapil from "../assets/images/kapilcircle.png";

export default function AboutMe() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500">
          <img
            src={kapil}
            alt="Kapil Agrawal"
            // fill
            // className="object-cover"
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">Kapil Agrawal</h1>

          <p className="text-xl text-gray-500 mb-4">Mern Stack Developer</p>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <a href="mailto:kapilagrawal448@gmail.com" target="_blank">
              <button className="p-2 text-sm rounded-full font-extrabold hover:bg-purple-500 hover:scale-125 transition-all">
                <Mail className="h-5 w-5" />
              </button>
            </a>
            <a href="https://github.com/KapilAgrawal2005" target="_blank">
              <button className="p-2 rounded-full font-extrabold hover:bg-purple-500 hover:scale-125 transition-all">
                <FaGithub className="h-5 w-5" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/kapil-agrawal-93069a284/"
              target="_blank"
            >
              <button className="p-2 rounded-full hover:bg-purple-500 hover:scale-125 transition-all">
                <Linkedin className="h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold pb-5 border-b text-center text-purple-500">
          About Me
        </h2>
        <div className="pt-8 flex flex-col md:flex-row gap-6 justify-center">
          <div className="flex-1">
            <p className="mb-4">
              Hello! I'm a passionate professional with expertise in MERN Stack
              Development. Currently I am a Fresher, I specialize in creating
              the MERN Stack Web Applications.
            </p>
            <p>
              When I'm not working, you can find me playing outdoor games. I
              believe in doing Smartly Hard Work.
            </p>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="h-5 w-5 text-gray-500" />
              <span>Location: Jaipur, Rajasthan, India</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="h-5 w-5 text-gray-500" />
              <span>Current Role: MERN Stack Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-gray-500" />
              <span>Education: B.Tech in Computer Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education  Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Education</h2>
        <div className="space-y-8">
          <div className="relative flex-col justify-center items-center pl-8 border-l-2 border-gray-200 pb-8">
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
            <h3 className="text-xl font-semibold">
              B.Tech in Computer Engineering
            </h3>
            <p className="text-gray-500 mb-2">
              NMIMS University • 2022 - Present
            </p>
            <p>
              I am currently pursuing a Bachelor of Technology in Computer
              Engineering at MPSTME, Shirpur. I have a CGPA of 3.56 out of 4.
            </p>
          </div>
          <div className="relative pl-8 border-l-2 border-gray-200 pb-8">
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
            <h3 className="text-xl font-semibold">
              Completed 12th std. (2022)
            </h3>
            <p className="text-gray-500 mb-2">
              DS Science Academy• 2020 - 2022
            </p>
            <p>
              Completed 12th std. from DS Science Academy, with 75.20% score in
              the Science stream.
            </p>
          </div>
          <div className="relative pl-8 border-l-2 border-gray-200">
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
            <h3 className="text-xl font-semibold">
              Completed 10th std. (2020)
            </h3>
            <p className="text-gray-500 mb-2">Keshav Vidya Mandir, • 2020</p>
            <p>
              Completed 12th std. from Saraswati Vidya Vihar Sr. Sec. School,
              with 96.67% score in the Science stream.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
