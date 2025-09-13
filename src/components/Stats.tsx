"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Users", value: "100k+" },
  { label: "Projects", value: "15+" },
  { label: "Awards", value: "10+" },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative px-8 md:px-24 py-20 bg-gray-900/90 backdrop-blur-sm"
    >
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
  );
}
