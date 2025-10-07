"use client";

import ProjectImageSlider from "@/components/ProjectImageSlider";
import { locationAdvantages, projects } from "@/data/projectsData";
import Image from "next/image";
import { useParams } from "next/navigation";

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
          {locationAdvantages.map((adv, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <div className="w-20 h-20 relative flex-shrink-0 rounded-lg overflow-hidden shadow">
                <Image
                  src={adv.image}
                  alt={adv.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-700">
                  {adv.title}
                </h3>
                <p className="text-gray-700 text-sm mt-1">{adv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ameneties section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-800 mb-8">
          Amenities That Redefine Comfort
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { icon: "🏊‍♂️", title: "Swimming Pool" },
            { icon: "🏋️‍♀️", title: "Fitness Center" },
            { icon: "🌳", title: "Green Spaces" },
            { icon: "🎮", title: "Recreation Zone" },
            { icon: "🛡️", title: "24x7 Security" },
            { icon: "🏠", title: "Club House" },
            { icon: "🚗", title: "Ample Parking" },
            { icon: "👶", title: "Kids Play Area" },
          ].map((a, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-md border border-sky-100 rounded-xl p-6 shadow hover:shadow-md transition flex flex-col items-center"
            >
              <span className="text-3xl mb-2">{a.icon}</span>
              <p className="text-green-700 font-semibold">{a.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="relative w-full lg:w-1/2 h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/projects/earth/logo.jpg"
            alt="Amenities"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-800 mb-6">
            World-Class Amenities
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
            Experience a perfect blend of luxury and comfort with thoughtfully
            designed amenities that elevate your lifestyle and create a
            community you’ll love to live in.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[
              "Club House",
              "Swimming Pool",
              "24x7 Security",
              "Children’s Play Area",
              "Gym & Fitness Center",
              "Green Parks",
            ].map((amenity, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-lg border border-sky-100 rounded-xl p-4 shadow hover:shadow-md transition"
              >
                <p className="text-green-700 font-medium text-sm sm:text-base">
                  {amenity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
