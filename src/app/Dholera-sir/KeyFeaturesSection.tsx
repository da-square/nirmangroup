"use client";

import { motion } from "framer-motion";
import {
  Bus,
  Leaf,
  Droplet,
  Wifi,
  Factory,
  TreePine,
} from "lucide-react";

const features = [
  {
    icon: <Bus className="w-8 h-8 text-white" />,
    title: "Smart Transportation",
    description:
      "Integrated transportation network with metro rail, high-speed rail, expressways, and international airport connectivity.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-white" />,
    title: "Renewable Energy",
    description:
      "Focus on renewable energy sources including solar parks and wind farms to ensure sustainable power supply.",
  },
  {
    icon: <Droplet className="w-8 h-8 text-white" />,
    title: "Water Management",
    description:
      "Advanced water management systems including treatment plants, recycling facilities, and flood control measures.",
  },
  {
    icon: <Wifi className="w-8 h-8 text-white" />,
    title: "Digital Connectivity",
    description:
      "High-speed internet connectivity and smart city infrastructure for seamless digital integration.",
  },
  {
    icon: <Factory className="w-8 h-8 text-white" />,
    title: "Industrial Zones",
    description:
      "Dedicated industrial zones for manufacturing, IT, and electronics sectors, boosting economic growth.",
  },
  {
    icon: <TreePine className="w-8 h-8 text-white" />,
    title: "Green Spaces",
    description:
      "Abundant green spaces, parks, and recreational areas for a balanced and eco-friendly environment.",
  },
];

export default function KeyFeaturesSection() {
  return (
    <section className="relative py-20 px-4 sm:px-10 bg-gradient-to-br from-sky-200 via-green-100 to-green-300 overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute top-0 left-0 w-[25rem] h-[25rem] bg-green-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-sky-200/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-sky-900"
        >
          Key Features of{" "}
          <span className="text-green-700">Dholera SIR</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Dholera SIR is being developed with world-class infrastructure
          and facilities to create a sustainable and smart urban environment.
        </motion.p>
      </div>

      {/* Feature cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white/60 backdrop-blur-md border border-green-100 rounded-3xl shadow-md hover:shadow-xl overflow-hidden transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-100/30 to-sky-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="p-8 relative z-10">
              <div className="bg-gradient-to-r from-green-500 to-sky-500 w-14 h-14 flex items-center justify-center rounded-full shadow-md mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
