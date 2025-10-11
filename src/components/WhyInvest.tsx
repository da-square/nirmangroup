"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { whyInvestList } from "@/data/whyInvestData";

export default function WhyInvest() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

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

      {/* Heading Section */}
      <motion.div
        className="relative z-10 text-center px-6 pt-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <motion.span
            className="text-sky-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Invest in{" "}
          </motion.span>
          <motion.span
            className="text-green-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dholera?
          </motion.span>
        </h2>
        <motion.p
          className="text-gray-800 mt-3 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Key developments powering the future of India’s first smart city
        </motion.p>
      </motion.div>

      {/* Slider Section */}
      <div className="relative w-full flex justify-center mt-12 mb-12">
        <div className="relative w-[90%] md:w-[80%] lg:w-[70%] h-[65vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/10 backdrop-blur-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={whyInvestList[activeIndex].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Background Image */}
              <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.05, opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={whyInvestList[activeIndex].img}
                  alt={whyInvestList[activeIndex].title}
                  fill
                  className="object-cover rounded-3xl"
                />
              </motion.div>

              {/* Overlay Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                className="
                    absolute 
                    top-4 left-3 
                    sm:top-6 sm:left-6 
                    md:top-8 md:left-10 
                    bg-white/20 
                    backdrop-blur-md 
                    p-3 sm:p-4 md:p-4 
                    rounded-2xl 
                    shadow-lg 
                    border border-white/30 
                    max-w-[85%] sm:max-w-[60%]
                  "
              >
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-sky-900 text-left leading-snug">
                  {whyInvestList[activeIndex].title}
                </h2>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
