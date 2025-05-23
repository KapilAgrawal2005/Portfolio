import HeroSection from "../components/HeroSection";
import Contact from "../components/Contact";
import BlurBlob from "../components/BlurBlob";
import Skills from "../components/Skills";
import AchievementsAndProjects from "../components/AchievementsAndProjects";

const Home = () => {
  return (
    <div>
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-10">
        <HeroSection />
        <Skills />
        <AchievementsAndProjects />
      </div>
      <Contact />
    </div>
  );
};
export default Home;
