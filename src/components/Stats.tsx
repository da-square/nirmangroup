"use client";

import { Users, Building2, Award, Home, Briefcase } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: Users,
    value: 800,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    icon: Building2,
    value: 9,
    suffix: "+",
    label: "Lakh Sq. Ft. Land Bank",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Years Of Experience",
  },
  {
    icon: Home,
    value: 4,
    suffix: "+",
    label: "Residential Projects",
  },
  {
    icon: Briefcase,
    value: 50,
    suffix: "+",
    label: "Channel Partners",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b  bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {stats.map(({ icon: Icon, value, suffix, label }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white/8 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center justify-center h-18 w-18 rounded-full border text-yellow-300 mb-4">
              <Icon className="h-12 w-12 text-yellow-300" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              {inView ? <CountUp end={value} duration={2} /> : 0}
              {suffix}
            </h3>
            <p className="mt-2 text-md text-gray-300">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
