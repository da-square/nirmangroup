"use client";

import { useParams } from "next/navigation";
import ProjectImageSlider from "@/components/ProjectImageSlider";
import { amenities, locationAdvantages, projects } from "@/data/projectsData";
import { useEffect } from "react";
import { Download } from "lucide-react";
import { triggerContactModal, DOWNLOAD_AFTER_FORM_EVENT } from "@/utils/contactModalEvent";
import Link from "next/link";

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

  const projectLocations = locationAdvantages?.filter((adv) =>
    project.locationAdvantages?.includes(adv.id)
  );

  const projectAmenities = amenities?.filter((adv) =>
    project.amenities.includes(adv.id)
  );

  // ------------------------
const projectId = typeof id === "string" ? id.replace(/^the_/, "") : "";
const brochureFile = `/broucher/${projectId}.pdf`;

  // ------------------------
  // Auto-download after form submission
  // ------------------------
  useEffect(() => {
    const handleAutoDownload = () => {
      const link = document.createElement("a");
      link.href = brochureFile;
      link.download = `${projectId}-brochure.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    window.addEventListener(DOWNLOAD_AFTER_FORM_EVENT, handleAutoDownload);
    return () =>
      window.removeEventListener(DOWNLOAD_AFTER_FORM_EVENT, handleAutoDownload);
  }, [brochureFile, projectId]);

  // ------------------------
  // Handle Brochure Button Click
  // ------------------------
  const handleDownloadBrochure = (e: React.MouseEvent<HTMLButtonElement>) => {
    const submitted = localStorage.getItem("contactFormSubmitted");
    if (submitted !== "true") {
      e.preventDefault();
      triggerContactModal(); // open contact form
    } else {
      const link = document.createElement("a");
      link.href = brochureFile;
      link.download = `${projectId}-brochure.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <main className="bg-gradient-to-b from-sky-200 via-green-100 to-sky-300 text-gray-800">
      {/* ✅ Image Gallery */}
      <ProjectImageSlider project={project} />

      {/* ✅ Project Description */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-sky-800 mb-6 leading-tight">
          {project.name}
        </h1>

        <div className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-sky-200 scrollbar-track-transparent px-2 sm:px-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-justify sm:text-center">
            {project.description}
          </p>
        </div>

        {/* Company Information Section */}
        <div className="mt-6 sm:mt-10 bg-white/30 border border-white/25 backdrop-blur-md rounded-2xl shadow-md px-4 sm:px-6 py-6 max-h-[55vh] overflow-y-auto scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-transparent">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed sm:leading-7 text-justify sm:text-center tracking-normal italic">
            {project.nirmaGroupDescription}
          </p>
        </div>
      </section>

      {/* ✅ Location Advantages */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-3xl font-bold text-sky-800 text-center mb-10">
          Location Advantages
        </h2>

        <div className="relative border-l-4 border-green-500 space-y-8 pl-6">
          {projectLocations.map((adv, i) => {
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

      {/* ✅ Amenities section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <h2 className="text-3xl font-bold text-sky-800 text-center mb-10">
          Project Amenities
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 backdrop-blur-xl">
          {projectAmenities?.map((a, i) => (
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

      {/* ✅ Ready to Invest Section with Brochure download */}
      <section className="w-full py-12 text-center bg-gradient-to-b from-sky-200 via-green-100 to-sky-300">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Invest?
        </h2>
        <p className="mb-6 text-lg sm:text-xl">
          Book a visit or get the latest brochure now!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href={`/contact`}
            className="cursor-pointer px-6 py-3 bg-white text-sky-800 rounded-lg hover:bg-white/90 transition"
          >
            Book a Visit
          </Link>

          {/* Brochure Download Button */}
          <button
            onClick={handleDownloadBrochure}
            className="cursor-pointer px-6 py-3 border border-white rounded-lg hover:bg-white/20 transition inline-flex items-center gap-2"
          >
            <Download size={18} />
            Download Brochure
          </button>
        </div>
      </section>
    </main>
  );
}
