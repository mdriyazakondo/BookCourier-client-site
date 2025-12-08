import React from "react";
import Latest from "../../components/Home/Latest/Latest";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import WhyChooseBookCourier from "../../components/Home/WhyChooseBookCourier/WhyChooseBookCourier";
import Coverage from "../../components/Home/Coverage/Coverage";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Latest />
      <WhyChooseBookCourier />
      <Coverage />
    </div>
  );
};

export default Home;
