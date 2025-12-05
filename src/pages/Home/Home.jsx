import React from "react";
import Latest from "../../components/Home/Latest/Latest";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import WhyChooseBookCourier from "../../components/Home/WhyChooseBookCourier/WhyChooseBookCourier";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Latest />
      <WhyChooseBookCourier />
    </div>
  );
};

export default Home;
