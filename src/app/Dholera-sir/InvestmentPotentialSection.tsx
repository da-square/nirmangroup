"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Building2,
  Handshake,
  Globe2,
} from "lucide-react";

const investmentFeatures = [
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "High ROI",
    description: (
      <>
        <p className="text-sm text-gray-600 mb-1">with government backing</p>
        <p className="text-xs text-gray-500">Significant appreciation and planned development.</p>
      </>
    ),
  },
  {
    icon: <Building2 className="w-8 h-8 text-white" />,
    title: "Multiple Sectors",
    description: (
      <>
        <p className="text-sm text-gray-600 mb-1">Investment opportunities in multiple sectors</p>
        <p className="text-xs text-gray-500">Residential, commercial, and industrial sectors.</p>
      </>
    ),
  },
  {
    icon: <Handshake className="w-8 h-8 text-white" />,
    title: "Government Support",
    description: (
      <>
        <p className="text-sm text-gray-600 mb-1">Strong Government Support</p>
        <p className="text-xs text-gray-500">Special incentives for investors.</p>
      </>
    ),
  },
  {
    icon: <Globe2 className="w-8 h-8 text-white" />,
    title: "Global Hub",
    description: (
      <>
        <p className="text-sm text-gray-600 mb-1">Positioned to become a global hub</p>
        <p className="text-xs text-gray-500">For manufacturing and trading hub.</p>
      </>
    ),
  },
];

export default function InvestmentPotentialSection() {
  return (
    <section className="relative py-20 px-4 sm:px-10 bg-gradient-to-br from-sky-200 via-green-100 to-green-300 overflow-hidden">
      {/* Decorative blurred circles - warm tones for investment theme */}
      <div className="absolute top-0 left-0 w-[25rem] h-[25rem] bg-orange-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-amber-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[15rem] h-[15rem] bg-white/20 rounded-full blur-xl -z-10" />

      <div className="max-w-7xl mx-auto text-center mb-14">
         <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-sky-900"
        >
          Investment{" "}
          <span className="text-green-700">Potential</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Dholera SIR offers significant investment opportunities across various sectors, backed by government support and world-class infrastructure.
        </motion.p>
      </div>

      {/* Feature cards - 2x2 grid for balance */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {investmentFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 300
            }}
            viewport={{ once: true }}
            className="group relative bg-white/60 backdrop-blur-md border border-amber-100 rounded-3xl shadow-md hover:shadow-xl overflow-hidden transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 to-orange-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="p-6 relative z-10 text-center">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-14 h-14 flex items-center justify-center rounded-full shadow-md mb-4 group-hover:rotate-12 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors">
                {feature.title}
              </h3>
              <div className="text-gray-700 leading-relaxed">
                {feature.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}