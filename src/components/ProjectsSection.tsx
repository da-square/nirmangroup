"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projectsData";
import Link from "next/link";

const ProjectsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 4000); // slightly slower for cinematic feel
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="relative w-full px-3 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-20 bg-gradient-to-b from-sky-200 via-green-100 to-sky-300 overflow-hidden">
      {/* Decorative Background Blurs */}
      <div className="absolute top-0 left-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-green-200/30 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[280px] sm:w-[400px] md:w-[450px] h-[280px] sm:h-[400px] md:h-[450px] bg-sky-200/30 rounded-full blur-3xl animate-pulse -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          <span className="text-sky-900">Our Ongoing</span>{" "}
          <span className="text-green-600">Projects</span>
        </h1>

        <div className="grid grid-cols-1 gap-8">
          {/* Featured Project */}
          <div className="flex flex-col space-y-6 w-[95%] md:w-full mx-auto">
            <div className="relative h-52 sm:h-72 md:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/10 backdrop-blur-lg transition-shadow hover:shadow-[0_0_40px_rgba(56,189,248,0.3),0_0_20px_rgba(110,231,183,0.2)]">
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
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 6,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={`/projects/${projects[active].id}`}
                      className="block w-full h-full"
                    >
                      <Image
                        src={projects[active].images[0]}
                        alt={projects[active].name}
                        fill
                        className={`object-contain rounded-xl ${
                          projects[active].id === "the_meridian" ? "pr-10" : ""
                        }`}
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-2 px-2 sm:px-0 justify-start">
              {projects.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`
                    relative 
                    w-16 sm:w-20 md:w-24 lg:w-28 
                    h-12 sm:h-14 md:h-16 lg:h-20 
                    rounded-xl 
                    overflow-hidden 
                    border-2 
                    flex-shrink-0 
                    transition-all
                    ${
                      active === idx
                        ? "border-green-400 shadow-[0_0_20px_rgba(110,231,183,0.5)]"
                        : "border-white/20 hover:border-green-400 hover:shadow-[0_0_15px_rgba(110,231,183,0.3)]"
                    }
                  `}
                >
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className={`object-fit rounded-xl ${
                      p.id === "the_meridian" ? "p-2 sm:p-3 md:p-5" : ""
                    }`}
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
