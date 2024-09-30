import React from "react";
import { HeroSection } from "../components/HomePage/HeroSection";
import { SliderSection } from "../components/HomePage/SliderSection";
import { CardSection } from "../components/HomePage/CardSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SliderSection />
      <CardSection />
    </div>
  );
};

export default HomePage;
