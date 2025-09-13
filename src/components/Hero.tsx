"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const images = ["/images/day.png", "/images/sunset.png", "/images/night.png","/images/place.png"];
const listItems = [
  "Gift to the India, Gift city in Gujarat",
  "New tech capital of India",
  "Our new powerhouse",
];

const Hero = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-start justify-center h-screen p-16 md:p-24 space-y-6 overflow-hidden">
        {/* Background Layers */}
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Hero background"
            fill
            priority
            className={`object-cover absolute inset-0 transition-opacity duration-[1500ms] ease-in-out z-0 ${
              stage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {/* Hero Content */}
        <div className={`relative z-10 text-white ${orbitron.className}`}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] animate-fadeInDown">
            Discover What
          </h1>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] text-blue-300 animate-fadeInUp">
            We’re Building
          </h1>

          <ul className="mt-10 space-y-4">
            {listItems.map((item, idx) => (
              <li
                key={idx}
                className="text-lg md:text-2xl font-semibold text-gray-200 opacity-0 animate-fadeInStagger hover:text-yellow-300 transition-colors"
                style={{ animationDelay: `${idx * 400}ms` }}
              >
                {item}
              </li>
            ))}
          </ul>

          <button className="px-8 py-4 mt-12 text-lg md:text-xl font-bold rounded-3xl shadow-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity duration-300">
            Know More
          </button>
        </div>
      </section>

      {/* EXTRA SCROLLABLE CONTENT */}
      <section className="relative z-10 bg-white text-gray-800 px-8 md:px-24 py-24 space-y-12 leading-relaxed">
        <h2 className={`text-4xl md:text-5xl font-bold ${orbitron.className}`}>
          More About the Vision
        </h2>
        <p>
          India is stepping into a bold new era of innovation, and Gujarat’s Gift City is
          at the forefront of this transformation. Designed as a global financial hub,
          this city integrates cutting-edge technology with sustainable living.
        </p>
        <p>
          With each passing moment, the future unfolds — just like the background shifting
          from day to sunset to night. This seamless cycle reflects progress, resilience,
          and the bright journey ahead.
        </p>
        <p>
          Gift City is more than just infrastructure — it is a statement of intent. From
          world-class financial services to futuristic tech parks, this is where the next
          wave of opportunity will arise.
        </p>
        <p>
          Beyond the numbers, what makes Gift City truly unique is its spirit. It embodies
          the ambition of a country ready to lead in every sphere, from finance to
          innovation, from technology to global influence.
        </p>
      </section>

      {/* ANIMATIONS */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInStagger {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s ease forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .animate-fadeInStagger {
          animation: fadeInStagger 1s ease forwards;
        }
      `}</style>
    </>
  );
};

export default Hero;
