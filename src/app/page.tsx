"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/day.png",
  "/images/sunset.png",
  "/images/night.png"
];

const listItems = [
  "Gift to the India, Gift city in Gujarat",
  "New tech capital of India",
  "Our new powerhouse"
];

const projects = [
  {
    title: "Smart City Initiative",
    description: "Innovative infrastructure for sustainable urban living",
  },
  {
    title: "Tech Hub",
    description: "Empowering startups and tech talent in Gujarat",
  },
  {
    title: "Green Energy",
    description: "Eco-friendly power solutions for the city",
  }
];

const stats = [
  { label: "Users", value: "100k+" },
  { label: "Projects", value: "15+" },
  { label: "Awards", value: "10+" }
];

export default function Home() {
  const [stage, setStage] = useState(0);
  const [transitionStarted, setTransitionStarted] = useState(false);

  const handleTransition = () => {
    if (!transitionStarted) {
      setTransitionStarted(true);
      setStage(1);
      setTimeout(() => setStage(2), 500);
    }
  };

  return (
    <div className="relative w-full min-h-screen font-sans overflow-x-hidden bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="absolute top-0 w-full flex justify-end p-6 md:p-10 space-x-6 z-20">
        {["Home", "Projects", "Stats", "Roadmap", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white font-semibold hover:text-yellow-300 transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-start justify-center h-screen p-16 md:p-24 space-y-6 overflow-hidden">
        {/* Background layers only for hero */}
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Hero background"
            fill
            priority
            className={`object-cover absolute inset-0 transition-opacity duration-700 ease-in-out z-0 ${
              stage >= index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Hero content above background */}
        <div className="relative z-10">
          {!transitionStarted ? (
            <>
              <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl">
                Discover What
              </h1>
              <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl">
                We’re Building
              </h1>

              <button
                onClick={handleTransition}
                className="px-8 py-4 mt-8 text-lg md:text-xl font-semibold rounded-3xl shadow-2xl text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300"
              >
                Know More
              </button>
            </>
          ) : (
            <>
              <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-xl animate-slideRight">
                See the Future
              </h1>

              {/* Animated List */}
              <ul className="mt-8 space-y-4">
                {listItems.map((item, idx) => (
                  <li
                    key={idx}
                    className={`text-xl md:text-2xl font-semibold opacity-0 animate-fadeUp hover:text-yellow-300 transition-all duration-300`}
                    style={{ animationDelay: `${idx * 300}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative px-8 md:px-24 py-20 bg-gray-900/80 backdrop-blur-sm">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 drop-shadow-lg">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className="bg-gray-800/50 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/80">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative px-8 md:px-24 py-20 bg-gray-900/90 backdrop-blur-sm">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 drop-shadow-lg">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className="text-white"
            >
              <p className="text-4xl md:text-5xl font-extrabold">{stat.value}</p>
              <p className="text-xl md:text-2xl">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="relative px-8 md:px-24 py-20 bg-gray-900/80 backdrop-blur-sm">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 drop-shadow-lg">
          Roadmap
        </h2>
        <div className="flex flex-col space-y-8">
          {["Phase 1: Foundation", "Phase 2: Expansion", "Phase 3: Innovation"].map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className="bg-gray-800/50 backdrop-blur-md p-6 rounded-3xl shadow-lg font-semibold"
            >
              {phase}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-8 md:px-24 py-12 bg-gray-900/90 backdrop-blur-sm flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">© 2025 Future Group. All rights reserved.</p>
        <div className="flex space-x-4">
          {["Twitter", "LinkedIn", "GitHub"].map((social) => (
            <a key={social} href="#" className="hover:text-yellow-300 transition-colors">{social}</a>
          ))}
        </div>
      </footer>

      {/* Tailwind keyframes for hero animations */}
      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateX(60vw); opacity: 1; }
        }
        .animate-slideRight {
          animation: slideRight 0.8s cubic-bezier(0.65,0,0.35,1) forwards;
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
