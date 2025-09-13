"use client";
import { motion } from "framer-motion";

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
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-8 md:px-24 py-20 bg-gray-900/80 backdrop-blur-sm"
    >
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
  );
}
