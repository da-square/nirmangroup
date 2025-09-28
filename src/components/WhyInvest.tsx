"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { whyInvestList } from "@/data/whyInvestData";

export default function WhyInvest() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Trigger overlay animation when section comes into view
  useEffect(() => {
    if (inView) {
      setShowOverlay(true);
      const timer = setTimeout(() => setShowOverlay(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  // Auto cycle between items
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % whyInvestList.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-sky-200 via-green-100 to-sky-300"
    >
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-green-200/30 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-3xl animate-pulse -z-10"></div>

      {/* Heading Overlay */}
      <AnimatePresence>
        {!showOverlay && (
          <motion.div
            className="relative z-10 text-center px-6 pt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <motion.span
                className="text-sky-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Why Invest in{" "}
              </motion.span>
              <motion.span
                className="text-green-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Dholera?
              </motion.span>
            </h2>
            <motion.p
              className="text-gray-800 mt-3 text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Key developments powering the future of India’s first smart city
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slider Section */}
      <div className="relative w-full flex justify-center mt-16">
        <div className="relative w-[90%] md:w-[80%] lg:w-[70%] h-[65vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/10 backdrop-blur-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={whyInvestList[activeIndex].title}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Background Image */}
              <Image
                src={whyInvestList[activeIndex].img}
                alt={whyInvestList[activeIndex].title}
                fill
                className="object-cover rounded-3xl"
              />

              {/* Overlay Info */}
              <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                <h2 className="text-2xl md:text-4xl font-bold text-green-600">
                  {whyInvestList[activeIndex].title}
                </h2>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
