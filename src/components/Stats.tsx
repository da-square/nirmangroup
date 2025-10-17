"use client";

import { Users, Building2, Award, Home, Briefcase } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";

const stats = [
  { icon: Users, value: 800, suffix: "+", label: "Happy Customers" },
  {
    icon: Building2,
    value: 4,
    suffix: "+",
    label: "Lakh Sq. yard. Land Bank",
  },
  { icon: Award, value: 10, suffix: "+", label: "Years Of Experience" },
  {
    icon: Home,
    value: 5,
    suffix: "+",
    label: "Residential/Commercial Projects",
  },
  { icon: Briefcase, value: 50, suffix: "+", label: "Channel Partners" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-24 relative bg-gradient-to-b from-sky-200 via-green-100 to-sky-300 overflow-hidden ash1-theme"
    >
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-300/30 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute top-1/3 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-sky-200/40 to-green-200/40 rounded-full blur-[200px] -z-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 relative z-10">
        {stats.map(({ icon: Icon, value, suffix, label }, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            className="relative flex flex-col items-center bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-[0_15px_25px_rgba(0,0,0,0.1),0_10px_10px_rgba(0,0,0,0.05)] border border-white/20 hover:scale-105 hover:rotate-1 transition-transform duration-500 overflow-hidden group"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-sky-400 via-green-300 to-sky-400 pointer-events-none animate-pulse-slow"></div>

            {/* Floating Glow */}
            <div className="absolute inset-0 rounded-3xl shadow-[0_0_40px_rgba(56,189,248,0.3),0_0_20px_rgba(110,231,183,0.2)] opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>

            {/* Icon */}
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white/10 border border-white/20 mb-6 z-10">
              <Icon className="h-14 w-14 text-green-500 group-hover:text-sky-500 transition-colors duration-500" />
            </div>

            {/* Number */}
            <h3 className="text-3xl font-extrabold text-sky-900 z-10">
              {inView ? <CountUp end={value} duration={2} /> : 0}
              {suffix}
            </h3>

            {/* Label */}
            <p className="mt-2 text-lg text-gray-700 text-center z-10">
              {label}
            </p>

            {/* Floating Animation */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Slow pulse animation for gradient border */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </section>
  );
}
