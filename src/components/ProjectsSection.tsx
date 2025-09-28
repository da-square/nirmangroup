"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projectsData";

const ProjectsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 4000); // slightly slower for cinematic feel
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-sky-200 via-green-100 to-sky-300 overflow-hidden">
      {/* Decorative Background Blurs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-200/30 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-sky-200/30 rounded-full blur-3xl animate-pulse -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="text-sky-900">Our Ongoing</span>{" "}
          <span className="text-green-600">Projects</span>
        </h1>

        <div className="grid lg:grid-cols-1 gap-8">
          {/* Featured Project */}
          <div className="flex flex-col space-y-6 w-[95%] md:w-[100%] mx-auto">
            <div className="relative h-64 sm:h-80 md:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/10 backdrop-blur-lg transition-shadow hover:shadow-[0_0_40px_rgba(56,189,248,0.3),0_0_20px_rgba(110,231,183,0.2)]">
              
              {/* AnimatePresence for smooth fade transitions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <motion.div
                    className="relative w-full h-full"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  >
                    <Image
                      src={projects[active].images[0]}
                      alt={projects[active].name}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 w-full bg-gradient-to-t from-black/70 via-black/50 to-transparent rounded-b-2xl">
                <h3 className="text-lg sm:text-xl md:text-3xl font-semibold text-green-600">
                  {projects[active].name}
                </h3>
                <p className="text-gray-800 text-sm sm:text-base md:text-lg mt-1">
                  {projects[active].description}
                </p>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-3 sm:space-x-4 overflow-x-auto scrollbar-hide pb-2">
              {projects.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`relative w-24 sm:w-28 md:w-32 h-16 sm:h-20 md:h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                    active === idx
                      ? "border-green-400 shadow-[0_0_20px_rgba(110,231,183,0.5)]"
                      : "border-white/20 hover:border-green-400 hover:shadow-[0_0_15px_rgba(110,231,183,0.3)]"
                  }`}
                >
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition rounded-xl" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
