"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projectsData";

const ProjectsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Ongoing <span className="text-yellow-400">Projects</span>
        </h1>

        <div className="grid lg:grid-cols-1 gap-8 ">
          {/* Left: Featured Project */}
          <div className="flex flex-col space-y-6 w-[95%] md:w-[100%]">
            {/* Main Image */}
            <div className="relative h-64 sm:h-80 md:h-[520px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={projects[active].images[0]}
                alt={projects[active].name}
                fill
                priority
                className="object-revert-layer bg-gray-800"
              />
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h3 className="text-lg sm:text-xl md:text-3xl font-semibold text-yellow-400">
                  {projects[active].name}
                </h3>
                <p className="text-xs sm:text-sm md:text-xl text-gray-300 mt-1">
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
                  className={`relative w-24 sm:w-28 md:w-32 h-16 sm:h-20 md:h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition ${
                    active === idx ? "border-yellow-400" : "border-transparent"
                  }`}
                >
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className="object-revert-layer"
                  />
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Map */}
          {/* <div className="flex justify-center rounded-2xl">
            <Image
              src="/images/projects/dholera-map.png"
              alt="Dholera Smart City Map"
              width={500}
              height={500}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-xl shadow-xl border border-gray-800 object-revert-layer"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
