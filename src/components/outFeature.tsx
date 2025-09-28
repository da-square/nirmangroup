"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  { time: "6 AM", text: "Morning jog in the green park 🌳", img: "/images/ourFeatures/jog.png" },
  { time: "10 AM", text: "Smart office lifestyle 🏢", img: "/images/ourFeatures/office.png" },
  { time: "6 PM", text: "Evening coffee in the futuristic plaza ☕", img: "/images/ourFeatures/cafe.png" },
  { time: "9 PM", text: "Balcony view of neon skyline 🌃", img: "/images/ourFeatures/nightview.png" },
];

export default function FutureCityExperience() {
  const [activeZone, setActiveZone] = useState<number>(0);
  const [activeImage, setActiveImage] = useState<number>(0);
  const [showOverlay, setShowOverlay] = useState(false);

  // Track when section is in view
  const { ref, inView } = useInView({
    threshold: 0.3, // trigger when 30% of section is visible
    triggerOnce: true, // only fire once
  });

  // Trigger overlay when section comes into view
  useEffect(() => {
    if (inView) {
      setShowOverlay(true);
      const timer = setTimeout(() => setShowOverlay(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  // Auto-scroll zones
  useEffect(() => {
    const zoneInterval = setInterval(() => {
      setActiveZone((prev) => (prev + 1) % zones.length);
      setActiveImage(0);
    }, 7000);
    return () => clearInterval(zoneInterval);
  }, []);

  // Auto-scroll images inside a zone
  useEffect(() => {
    const imgInterval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % zones[activeZone].stories.length);
    }, 2500);
    return () => clearInterval(imgInterval);
  }, [activeZone]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Overlay with Door Opening Animation */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Left Door */}
            <motion.div
              className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-gray-800 to-gray-900"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Right Door */}
            <motion.div
              className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-gray-800 to-gray-900"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Center Text */}
            <motion.div
              className="relative z-10 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-blue-400 drop-shadow-lg">
                Welcome to the City of Tomorrow ✨
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Short Intro */}
      {!showOverlay && inView && (
        <motion.div
          className="relative z-10 text-center px-6 mt-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4">
            Step Into the Future
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Explore the zones that define tomorrow’s lifestyle.
          </p>
        </motion.div>
      )}

      {/* Explore Zones Slider */}
      {!showOverlay && inView && (
        <div className="relative w-full flex justify-center mt-20">
          <div className="relative w-[90%] md:w-[80%] lg:w-[70%] h-[65vh] rounded-2xl overflow-hidden shadow-2xl">
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
                  className="object-cover brightness-75"
                />
                {/* Overlay Info */}
                <div className="absolute bottom-10 left-10 bg-black/60 backdrop-blur-md p-6 rounded-xl max-w-lg shadow-lg">
                  <h2 className="text-2xl md:text-4xl font-bold text-cyan-300">
                    {zones[activeZone].title}
                  </h2>
                  <p className="text-gray-300 mt-2">{zones[activeZone].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
      {/* Enhanced Day in the Life */}
      {!showOverlay && inView && (
        <div className="mt-28 px-6 max-w-6xl mx-auto relative z-10">
          <h3 className="text-3xl md:text-5xl font-bold text-center text-blue-300 mb-16">
            A Day in the Life 🌍
          </h3>
          <div className="relative border-l-2 border-cyan-400/40 ml-6">
            {timeline.map((event, i) => (
              <motion.div
                key={i}
                className={`mb-14 ml-6 relative group flex flex-col md:flex-row items-center md:items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Timeline Dot */}
                <span className="absolute -left-8 w-6 h-6 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/50 group-hover:scale-125 transition-transform" />

                {/* Image */}
                <Image
                  src={event.img}
                  alt={event.text}
                  width={400}
                  height={240}
                  className="rounded-xl object-cover shadow-xl group-hover:scale-105 transition-transform"
                />

                {/* Text */}
                <div className="max-w-md bg-black/50 p-5 rounded-xl shadow-lg group-hover:bg-black/70 transition-colors">
                  <p className="text-cyan-300 font-semibold text-sm md:text-base mb-2">
                    {event.time}
                  </p>
                  <p className="text-gray-200 text-base md:text-lg">{event.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
