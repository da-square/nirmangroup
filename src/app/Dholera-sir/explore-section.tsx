"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Network,
  Route,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const ExploreSirSection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: <Building2 size={18} /> },
    { id: "infrastructure", label: "Infrastructure", icon: <Network size={18} /> },
    { id: "connectivity", label: "Connectivity", icon: <Route size={18} /> },
    { id: "investment", label: "Investment", icon: <Briefcase size={18} /> },
  ];

  const tabContent: any = {
    overview: {
      image: "/images/dholera-sir/investment-region.png",
      title: "Dholera Special Investment Region (SIR)",
      description:
        "Dholera SIR is India's first greenfield industrial smart city being developed as part of the Delhi-Mumbai Industrial Corridor (DMIC). Located in Gujarat’s Gulf of Khambhat, it spans 920 sq km and stands as a global hub for manufacturing and trade.",
      details: [
        {
          title: "Vision",
          text: "To develop Dholera as a global manufacturing and trading hub supported by world-class infrastructure, providing a high quality of life, sustainable development, and investment opportunities.",
        },
        {
          title: "Development Plan",
          text: "Planned in phases, with Phase 1 covering 22.5 sq km. Designed to accommodate 2 million people by 2040 with sustainable urban planning.",
        },
      ],
      facts: [
        "Part of the Delhi-Mumbai Industrial Corridor (DMIC)",
        "Located 100 km southwest of Ahmedabad",
        "Total area: 920 sq km (22.5 sq km in Phase 1)",
        "Managed by DICDL & DSIRDA",
        "Designated as a National Investment & Manufacturing Zone (NIMZ)",
      ],
    },
    infrastructure: {
      image: "/images/dholera-sir/semi-conductor-plant.png",
      title: "Futuristic Infrastructure",
      description:
        "World-class infrastructure with smart grids, intelligent transport, and data-driven utilities to enhance sustainability and living standards.",
      details: [
        {
          title: "Smart Systems",
          text: "Real-time monitoring, renewable energy, and water recycling integrated city-wide.",
        },
        {
          title: "Digital Backbone",
          text: "IoT-enabled city command centers and AI-driven infrastructure systems.",
        },
      ],
      facts: [
        "10-lane expressway connectivity",
        "Smart water and power grid",
        "Sustainable urban ecosystem",
      ],
    },
    connectivity: {
      image: "/images/dholera-sir/transportation-network.png",
      title: "Unmatched Connectivity",
      description:
        "Strategically located along DMIC with expressways, airports, and metro links connecting major cities and ports.",
      details: [
        {
          title: "Expressway Access",
          text: "Ahmedabad–Dholera–Bhavnagar six-lane expressway ensures rapid transit.",
        },
        {
          title: "Airport & Metro",
          text: "Upcoming Dholera International Airport and high-speed rail links.",
        },
      ],
      facts: [
        "Integrated multi-modal network",
        "Proximity to Pipavav Port",
        "40 min from Ahmedabad post airport completion",
      ],
    },
    investment: {
      image: "/images/dholera-sir/investment-opportunity.png",
      title: "Investment & Opportunities",
      description:
        "A global destination for manufacturing, logistics, and green technology investments with special economic incentives.",
      details: [
        {
          title: "Global Investors",
          text: "MNCs and domestic firms investing across diverse sectors.",
        },
        {
          title: "Emerging Industries",
          text: "Electronics, renewable energy, aerospace, and smart mobility.",
        },
      ],
      facts: [
        "100% FDI allowed",
        "Single-window clearance system",
        "Low cost of operations",
      ],
    },
  };

  const active = tabContent[activeTab];

  return (
    <section className="relative w-full py-20 px-4 sm:px-8 bg-gradient-to-br from-sky-200 via-green-100 to-green-300 overflow-hidden">
      {/* background gradient shapes */}
      <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-sky-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-green-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 font-medium text-sm sm:text-base
                ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-green-500 to-sky-500 text-white shadow-md border-transparent scale-105"
                    : "bg-white/70 backdrop-blur-md border border-green-100 hover:text-green-700 hover:bg-white"
                }`}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Animated content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl border border-green-100 p-8 sm:p-10"
          >
            {/* image + text */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="relative w-full h-[250px] sm:h-[320px]"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="rounded-2xl object-cover border border-white shadow-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3">
                  {active.title}
                </h3>
                <p className="text-gray-700 mb-6">{active.description}</p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {active.details.map((d: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className="group relative bg-white/70 p-5 rounded-xl shadow-sm border border-sky-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-sky-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h4 className="font-semibold text-sky-800 mb-2 relative z-10">
                        {d.title}
                      </h4>
                      <p className="text-sm text-gray-700 relative z-10">{d.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Key Facts Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 bg-gradient-to-r from-green-50 to-sky-50/60 rounded-2xl p-6 border border-green-100 shadow-inner"
            >
              <h4 className="font-semibold text-green-700 mb-3">Key Facts</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {active.facts.map((fact: string, i: number) => (
                  <li key={i}>{fact}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExploreSirSection;
