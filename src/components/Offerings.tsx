"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { offerings } from "@/data/offerings";

const Offerings = () => {
  return (
    <section
      className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-sky-200 via-green-100 to-sky-300 overflow-hidden ash1-theme"
      id="offerings"
    >
      {/* Top Gradient Overlay to blend with previous section */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-sky-100 via-green-50 to-transparent -z-10"></div>

      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-green-200/30 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl animate-pulse -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-sky-900">
          Our <span className="text-green-600">Offerings</span>
        </h1>

        {/* Grid of offerings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {offerings.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.2, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-white/10 backdrop-blur-lg border border-white/10 hover:shadow-[0_0_40px_rgba(56,189,248,0.3),0_0_20px_rgba(110,231,183,0.2)] transition-shadow duration-500"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-sky-300 via-green-200 to-sky-300 pointer-events-none animate-pulse-slow"></div>

              {/* Background Image with padding */}
              <div className="relative w-full h-60 p-4 flex items-center justify-center">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-2xl"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60 group-hover:opacity-80 transition-opacity rounded-2xl`}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-sky-900 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Floating glow animation */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Slow pulse animation for gradient border */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default Offerings;
