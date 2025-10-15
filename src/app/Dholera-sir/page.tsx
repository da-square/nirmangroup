"use client";

import React from "react";
import ExploreSirSection from "./explore-section";
import KeyFeaturesSection from "./KeyFeaturesSection";
import StrategicLocationSection from "./StrategicLocationSection";
import InvestmentPotentialSection from "./InvestmentPotentialSection";

const SirPage = () => {
  return (
    <section className="relative bg-gradient-to-br from-sky-200 via-green-100 to-green-300">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 py-24 lg:py-24 px-4 sm:px-6">
        {/* Left Text Section */}
        <div className="flex-1 w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-900 leading-snug drop-shadow-sm">
            INDIA&apos;S FIRST GREEN FIELD SMART CITY
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-700 leading-snug">
            Dholera Special Investment Region (SIR)
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Dholera SIR is a visionary greenfield industrial city being
            developed near Ahmedabad, Gujarat. Spanning over{" "}
            <strong>920 sq. km</strong>, this world-class smart city is a joint
            initiative by the Government of India and the Government of Gujarat
            — designed to drive innovation, investment, and infrastructure
            excellence.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Strategically positioned along the{" "}
            <strong>Delhi–Mumbai Industrial Corridor (DMIC)</strong>, Dholera
            enjoys seamless connectivity to major trade routes, airports, ports,
            and highways — making it one of India’s most promising global
            investment destinations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              "Strategic Location",
              "Government Backed",
              "World-Class Infrastructure",
              "High Investment Potential",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500/90 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <button className="mt-4 sm:mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 sm:px-10 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Explore Opportunities
          </button>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/30 hover:scale-[1.02] transition-transform duration-500">
            <img
              src="/images/dholera-sir/futuredholera.png"
              alt="Dholera SIR Futuristic City"
              className="w-full h-auto sm:h-[360px] md:h-[420px] lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Sections */}
      <ExploreSirSection />
      <KeyFeaturesSection />
      <StrategicLocationSection />
      <InvestmentPotentialSection />
    </section>
  );
};

export default SirPage;
