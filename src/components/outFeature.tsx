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
  {  text: "The Earth", img: "/images/projects/earth/13.jpg" },
  {  text: "The Meridian", img: "/images/projects/meridian/14.jpg" },
  {  text: "Palm Tree", img: "/images/projects/palm-trees/Scene 25_1.png" },
  {  text: "Regalia", img: "/images/projects/regalia/14.jpg" },
    {  text: "Velavadar Exotica", img: "/images/projects/velavadar-exotica/12.png" },
];

export default function FutureCityExperience() {
  const [activeZone, setActiveZone] = useState<number>(0);`1`
  const [activeImage, setActiveImage] = useState<number>(0);
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
      className="relative w-full min-h-screen overflow-hidden 
      bg-gradient-to-br from-sky-200 via-green-100 to-sky-300 text-gray-800"
    >
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-sky-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-green-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-sky-200/50 to-green-200/50 rounded-full blur-[200px]"></div>
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
              className="text-5xl md:text-6xl font-extrabold text-green-600 drop-shadow-lg"
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
          className="relative z-10 text-center px-6 mt-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-sky-900 mb-4">
            Step Into the Future
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Explore the zones that define tomorrow’s lifestyle.
          </p>
        </motion.div>
      )}

      {/* Zones Slider */}
      {!showOverlay && inView && (
        <div className="relative w-full flex justify-center mt-20">
          <div className="relative w-[90%] md:w-[80%] lg:w-[70%] h-[65vh] rounded-3xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-xl border border-white/30">
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
                  className="object-cover rounded-3xl"
                />
                <div className="absolute bottom-10 left-10 bg-white/70 backdrop-blur-lg p-6 rounded-2xl max-w-lg shadow-lg border border-sky-100">
                  <h2 className="text-2xl md:text-4xl font-bold text-green-700">
                    {zones[activeZone].title}
                  </h2>
                  <p className="text-gray-800 mt-2">{zones[activeZone].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

{/* Timeline */}
{!showOverlay && inView && (
  <div className="mt-28 px-6 max-w-6xl mx-auto relative z-10">
    <h3 className="text-3xl md:text-5xl font-bold text-center text-sky-800 mb-16">
      Current Projects
    </h3>

    <div className="relative border-l-2 border-green-400 ml-6">
      {timeline.map((event, i) => (
        <motion.div
          key={i}
          className={`mb-20 ml-6 relative group flex flex-col md:flex-row items-center gap-8 ${
            i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Dot */}
          <span className="absolute -left-8 w-6 h-6 bg-green-400 rounded-full shadow-md group-hover:scale-125 transition-transform" />

          {/* Image */}
          <div className="relative w-[400px] h-[260px] flex-shrink-0">
            <Image
              src={event.img}
              alt={event.text}
              fill
              className="rounded-xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text — now vertically centered with image */}
          <div className="flex items-center h-[260px]">
            <div className="bg-gradient-to-r from-sky-50 to-green-50 p-6 rounded-xl shadow-md border border-gray-100 group-hover:shadow-lg max-w-md flex items-center">
              <p className="text-gray-800 text-base md:text-lg font-medium">
                {event.text}
              </p>
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
