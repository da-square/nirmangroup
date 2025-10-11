"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Truck,
  Plane,
  Globe,
} from "lucide-react";

const locationHighlights = [
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: "100 km from Ahmedabad",
    description: "Strategic proximity to Gujarat's economic hub for seamless business operations.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: "30 km from Bhavnagar",
    description: "Excellent access to coastal trade routes and industrial clusters.",
  },
  {
    icon: <Truck className="w-6 h-6 text-white" />,
    title: "Dedicated Freight Corridor",
    description: "High-speed rail connectivity via DMIC for efficient logistics and supply chain.",
  },
  {
    icon: <Plane className="w-6 h-6 text-white" />,
    title: "Planned International Airport",
    description: "Future gateway for global connectivity and aviation-driven growth.",
  },
];

export default function StrategicLocationSection() {
  return (
    <section className="relative py-20 px-4 sm:px-10 bg-gradient-to-b from-green-200 via-sky-100 to-sky-300 overflow-hidden">
      {/* Decorative blurred circles - enhanced from reference */}
      <div className="absolute top-0 left-0 w-[25rem] h-[25rem] bg-cyan-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[15rem] h-[15rem] bg-white/20 rounded-full blur-xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-800"
          >
            Strategic Location
            <span className="block text-blue-700">Positioned for Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed"
          >
            Perfectly positioned in the Delhi-Mumbai Industrial Corridor (DMIC), one of the world's largest infrastructure projects. This prime location offers excellent connectivity and access to major markets. Dholera SIR is strategically located, well connected with trade gateways and falls in the influence zone of proposed Delhi-Mumbai Industrial Corridor project (DMIC), a joint initiative by the Government of India and Japan.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-12"
        >
          {/* Left: Map Image - Adjusted for full visibility */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 lg:w-1/2 max-w-md lg:max-w-lg"
          >
            <div className="relative bg-white/70 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-cyan-100/50 group">
              <img
                src="/images/dholera-sir/expressmap.jpg" // Replace with your actual map image path
                alt="Dholera SIR Strategic Location Map"
                className="w-full h-[600px] lg:h-[700px] object-contain" // Changed to object-contain to show whole image without cropping
              />
              {/* Overlay globe icon with subtle animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-cyan-500/80 backdrop-blur-sm p-4 rounded-full shadow-lg group-hover:scale-110 transition-all duration-300"
              >
                <Globe className="w-7 h-7 text-white" />
              </motion.div>
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right: Highlights Grid - Styled like reference feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 lg:w-1/2"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {locationHighlights.map((highlight, index) => (
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
                  className="group relative bg-white/60 backdrop-blur-md border border-blue-100 rounded-3xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
                >
                  {/* Subtle background gradient on hover, like reference */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/30 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="p-6 relative z-10">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 flex items-center justify-center rounded-full shadow-md mb-4 group-hover:rotate-12 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}