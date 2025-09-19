"use client";

import Amenities from "@/components/Amenities";
import ContactForm from "@/components/Form";
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import ProjectsSection from "@/components/ProjectsSection";
import Stats from "@/components/Stats";
import WhyInvest from "@/components/WhyInvest";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <Stats />
      <Offerings />
      <ProjectsSection />
      <WhyInvest />
      <ContactForm />
      <Amenities />
      {/* <Projects />
       */}
    </div>
  );
}
