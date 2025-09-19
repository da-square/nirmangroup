"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { offerings } from "@/data/offerings";

const Offerings = () => {
  return (
    <section
      className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 py-20 bg-gray-950 text-white"
      id="offerings"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our <span className="text-yellow-400">Offerings</span>
        </h1>

        {/* Grid of offerings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {offerings.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              {/* Background Image with overlay */}
              <div className="relative w-full h-60">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60 group-hover:opacity-80 transition-opacity`}
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-gray-900 group-hover:bg-gray-800 transition-colors duration-500">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
