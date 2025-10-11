"use client";

import Amenities from "@/components/Amenities";
import ContactForm from "@/components/Form";
import Hero from "@/components/Hero";
import { offerings } from "@/data/offerings";
import FutureCityExperience from "@/components/outFeature";
import ProjectsSection from "@/components/ProjectsSection";
// import ProjectsSection from "@/components/ProjectsSection";
import Stats from "@/components/Stats";
import WhyInvest from "@/components/WhyInvest";
import Offerings from "@/components/Offerings";
import GiantsCarousel from "@/components/GiantsCarousel";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <Stats />
      <FutureCityExperience />
      <Offerings />
      <ProjectsSection />
      <GiantsCarousel />
      <WhyInvest />

      {/* <Amenities /> */}
      {/* <Projects />
       */}
    </div>
  );
}
