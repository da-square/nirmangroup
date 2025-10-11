"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Network, Route, Briefcase } from "lucide-react";

const ExploreSirSection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: <Building2 size={18} /> },
    {
      id: "infrastructure",
      label: "Infrastructure",
      icon: <Network size={18} />,
    },
    { id: "connectivity", label: "Connectivity", icon: <Route size={18} /> },
    { id: "investment", label: "Investment", icon: <Briefcase size={18} /> },
  ];

  const tabContent: any = {
    overview: {
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
      title: "Multi-Modal Connectivity",
      description:
        "Strategically located along DMIC with expressways, airports, rail, and sea routes connecting major cities and ports. Dholera SIR ensures seamless access to the world.",
      subConnectivities: [
        {
          id: "road",
          title: "Road Connectivity",
          text: "Connected via the Ahmedabad–Dholera–Bhavnagar Expressway, ensuring fast logistics and easy commute to major industrial hubs.",
          image: "/images/dholera-sir/road-connectivity.jpg",
        },
        {
          id: "air",
          title: "Air Connectivity",
          text: "The upcoming Dholera International Airport is under development — designed for both passenger and cargo operations with global standards.",
          image: "/images/dholera-sir/air-connectivity.jpg",
        },
        {
          id: "rail",
          title: "Rail Connectivity",
          text: "Linked with the Western Dedicated Freight Corridor (DFC) and high-speed rail, providing efficient cargo and passenger transport.",
          image: "/images/dholera-sir/rail-connectivity.jpeg",
        },
        {
          id: "sea",
          title: "Sea Connectivity",
          text: "Proximity to key ports like Pipavav and Bhavnagar ensures smooth maritime trade and export-import logistics.",
          image: "/images/dholera-sir/sea-connectivity.png",
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
      {/* Background gradient shapes */}
      <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-sky-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-green-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Independent Video Section */}
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-3xl"
              src="https://www.youtube.com/embed/DRU3XAbwGVQ?autoplay=0&modestbranding=1&rel=0"
              title="Dholera SIR Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Tabs Section */}
        <div>
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

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl border border-green-100 p-4 sm:p-8"
            >
              {activeTab === "overview" ? (
                <div className="flex flex-col gap-8">
                  {/* Video + Text + Second Video */}
                  <div className="flex flex-col md:flex-row gap-8 items-stretch">
                    {/* First Overview Video */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="w-full md:w-1/2 relative rounded-3xl shadow-2xl overflow-hidden"
                    >
                      <div className="relative pb-[56.25%] h-full">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full rounded-3xl"
                          src="https://www.youtube.com/embed/5m-rS1dByJY?autoplay=0&modestbranding=1&rel=0"
                          title={active.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </motion.div>

                    {/* Text + Second Video */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3">
                          {active.title}
                        </h3>
                        <p className="text-gray-700 mb-5">
                          {active.description}
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 flex-1">
                        {active.details.map((d: any, i: number) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="relative bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-md border border-green-100 hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
                          >
                            <h4 className="font-semibold text-green-700 mb-1">
                              {d.title}
                            </h4>
                            <p className="text-sm text-gray-700">{d.text}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Key Facts */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 bg-gradient-to-r from-green-50 to-sky-50/60 rounded-2xl p-6 border border-green-100 shadow-inner w-full"
                  >
                    <h4 className="font-semibold text-green-700 mb-2">
                      Key Facts
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      {active.facts.map((fact: string, i: number) => (
                        <li key={i}>{fact}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ) : activeTab === "connectivity" ? (
                <>
                  <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 text-center">
                    {active.title}
                  </h3>
                  <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto">
                    {active.description}
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {active.subConnectivities.map((c: any, i: number) => (
                      <motion.div
                        key={c.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 * i }}
                        className="group bg-white/70 backdrop-blur-md border border-sky-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                      >
                        <div className="relative w-full h-[180px] sm:h-[200px]">
                          <Image
                            src={c.image}
                            alt={c.title}
                            fill
                            className="object-cover rounded-t-2xl"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="font-semibold text-green-700 mb-2">
                            {c.title}
                          </h4>
                          <p className="text-sm text-gray-700">{c.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-10 bg-gradient-to-r from-green-50 to-sky-50/60 rounded-2xl p-6 border border-green-100 shadow-inner"
                  >
                    <h4 className="font-semibold text-green-700 mb-3">
                      Key Facts
                    </h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      {active.facts.map((fact: string, i: number) => (
                        <li key={i}>{fact}</li>
                      ))}
                    </ul>
                  </motion.div>
                </>
              ) : (
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
                          <p className="text-sm text-gray-700 relative z-10">
                            {d.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExploreSirSection;
