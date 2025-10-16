"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const zones = [
  {
    id: "residential",
    title: "Residential Lifestyle",
    desc: "Morning jogs in lush parks, family balconies with futuristic skyline views.",
    stories: ["/images/ourFeatures/res1.png", "/images/ourFeatures/res2.png", "/images/ourFeatures/res3.png"],
  },
  {
    id: "commercial",
    title: "Commercial Hub",
    desc: "Smart offices, buzzing co-working, futuristic business vibe.",
    stories: ["/images/ourFeatures/commer1.png", "/images/ourFeatures/commer2.png", "/images/ourFeatures/commer3.png"],
  },
  {
    id: "recreational",
    title: "Recreational Spaces",
    desc: "Cafes, malls, nightlife plazas — the city comes alive at night.",
    stories: ["/images/ourFeatures/rect1.png", "/images/ourFeatures/rect2.png", "/images/ourFeatures/rect3.png"],
  },
];

const timeline = [
  { text: "The Meridian", img: "/images/projects/meridian/14.jpg" },
  { text: "The Regalia", img: "/images/projects/regalia/15.jpg" },
  { text: "The Velavadar Exotica", img: "/images/projects/velavadar-exotica/12.png" },
  { text: "The Earth", img: "/images/projects/earth/13.jpg" },
];

export default function FutureCityExperience() {
  const [activeZone, setActiveZone] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setShowOverlay(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  useEffect(() => {
    const zoneInterval = setInterval(() => {
      setActiveZone((prev) => (prev + 1) % zones.length);
      setActiveImage(0);
    }, 7000);
    return () => clearInterval(zoneInterval);
  }, []);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % zones[activeZone].stories.length);
    }, 2500);
    return () => clearInterval(imgInterval);
  }, [activeZone]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-sky-200 via-green-100 to-sky-300 text-gray-800"
    >
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-sky-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] bg-green-300/40 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Overlay Intro */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-sky-300 to-green-300"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-green-600 text-center px-4 drop-shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Welcome to the City of Tomorrow ✨
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Intro Text */}
      {!showOverlay && inView && (
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 mt-16 sm:mt-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-900 mb-3 sm:mb-4">
            Step Into the Future
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            Explore the zones that define tomorrow’s lifestyle.
          </p>
        </motion.div>
      )}

      {/* Zones Slider */}
      {!showOverlay && inView && (
        <div className="relative w-full flex justify-center mt-10 sm:mt-20 px-4">
          <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-[50vh] sm:h-[60vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-xl border border-white/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${zones[activeZone].id}-${activeImage}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={zones[activeZone].stories[activeImage]}
                  alt={zones[activeZone].title}
                  fill
                  className="object-cover rounded-2xl sm:rounded-3xl"
                />
                <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 bg-white/80 backdrop-blur-lg p-3 sm:p-6 rounded-xl sm:rounded-2xl max-w-[90%] sm:max-w-lg shadow-lg border border-sky-100">
                  <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-green-700">
                    {zones[activeZone].title}
                  </h2>
                  <p className="text-gray-800 mt-1 sm:mt-2 text-sm sm:text-base">
                    {zones[activeZone].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Timeline */}
      {!showOverlay && inView && (
        <div className="mt-16 sm:mt-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-sky-800 mb-10 sm:mb-16">
            Current Projects
          </h3>

          <div className="relative border-l-2 sm:border-l-4 border-green-500 ml-4 sm:ml-8">
            {timeline.map((event, i) => (
              <motion.div
                key={i}
                className={`mb-10 sm:mb-14 ml-4 sm:ml-8 relative group flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Dot */}
                <span className="absolute -left-6 sm:-left-10 w-4 sm:w-8 h-4 sm:h-8 bg-green-500 border-2 sm:border-4 border-white rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300" />

                {/* Image */}
                <div className="relative w-full sm:w-[520px] h-[220px] sm:h-[340px] flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={event.img}
                    alt={event.text}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Text */}
                <div className="flex items-center h-auto md:h-[340px] w-full sm:w-auto">
                  <div className="bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-lg border border-green-100 hover:shadow-2xl max-w-full sm:max-w-md transition-all duration-500 relative">
                    <div className="absolute top-0 left-0 w-1 h-full sm:w-1.5 bg-gradient-to-b from-green-400 to-sky-400 rounded-l-xl" />
                    <div className="pl-3 sm:pl-4">
                      <p className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2 bg-gradient-to-r from-green-600 to-sky-500 bg-clip-text text-transparent">
                        {event.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
