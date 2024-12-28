import React from "react";
import HeroSection from "./Hero/HeroSection";
import SocialLinks from "./Hero/SocialLinks";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <HeroSection />
        {/* <SocialLinks /> */}
      </div>
      <ContactForm />
    </div>
  );
};
export default Home;
