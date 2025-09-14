"use client";

import ContactForm from "@/components/Form";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import WhyInvest from "@/components/WhyInvest";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <Stats />
      <WhyInvest />
      {/* <ContactForm /> */}

      {/* <Projects />
       */}
    </div>
  );
}

Projects;
