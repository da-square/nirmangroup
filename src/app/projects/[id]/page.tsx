"use client";

import { useParams } from "next/navigation";

import ProjectImageSlider from "@/components/ProjectImageSlider";
import { amenities, locationAdvantages, projects } from "@/data/projectsData";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Project not found.
      </div>
    );
  }

  return (
    <main className="bg-gradient-to-b from-sky-200 via-green-100 to-sky-300 text-gray-800">
      {/* ✅ Image Gallery */}
      <ProjectImageSlider project={project} />

      {/* ✅ Project Description */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-sky-800 mb-6 leading-tight">
          {project.name}
        </h1>

        <div className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-sky-200 scrollbar-track-transparent px-1 sm:px-2">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-justify sm:text-center">
            {project.description}
          </p>
        </div>
      </section>

      {/* ✅ Location Advantages */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-3xl font-bold text-sky-800 text-center mb-10">
          Location Advantages
        </h2>

        <div className="relative border-l-4 border-green-500 space-y-8 pl-6">
          {locationAdvantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <div key={i} className="flex items-center gap-4">
                <Icon className="w-14 h-14 text-green-700" />

                <div>
                  <h3 className="text-lg font-semibold text-green-700">
                    {adv.title}
                  </h3>
                  <p className="text-gray-700 text-sm mt-1">
                    {adv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Ameneties section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 backdrop-blur-xl">
          {amenities.map((a, i) => (
            <div
              key={i}
              className="bg-white/30 border border-white/40 backdrop-blur-md rounded-2xl p-5 text-center hover:scale-105 hover:bg-white/40 transition-all"
            >
              <div className="text-4xl mb-3">{a.icon}</div>
              <h4 className="text-sm sm:text-base font-semibold text-sky-800">
                {a.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-12 text-center bg-gradient-to-b from-sky-200 via-green-100 to-sky-300">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Invest?
        </h2>
        <p className="mb-6 text-lg sm:text-xl">
          Book a visit or get the latest brochure now!
        </p>
        <div className="flex justify-center gap-4">
          <button className="cursor-pointer px-6 py-3 bg-white text-sky-800 rounded-lg hover:bg-white/90 transition">
            Book a Visit
          </button>
          <button className="cursor-pointer px-6 py-3 border border-white rounded-lg hover:bg-white/20 transition">
            Download Brochure
          </button>
        </div>
      </section>
    </main>
  );
}
