"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const images = [
  "/images/hero/day.png",
  "/images/hero/sunset.png",
  "/images/hero/night.png",
  "/images/hero/place.png",
];
const listItems = [
  "New tech capital of India",
  "City of Endless Possibilities",
  "A City for Every Dream",
];

const Hero = () => {
  const [stage, setStage] = useState(0);
  const handleKnowMoreClick = () => {
    const offeringsSection = document.getElementById("offerings");
    offeringsSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-start justify-center min-h-screen w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-20 space-y-6 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 overflow-hidden">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Hero background"
              fill
              priority
              className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
                stage === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-white ${orbitron.className}`}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] animate-fadeInDown">
            Discover What
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide text-blue-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] animate-fadeInUp">
            We’re Building
          </h1>

          <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            {listItems.map((item, idx) => (
              <li
                key={idx}
                className="text-base sm:text-lg md:text-2xl font-semibold text-gray-200 opacity-0 animate-fadeInStagger hover:text-yellow-300 transition-colors"
                style={{ animationDelay: `${idx * 400}ms` }}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Investment Line */}
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl font-bold text-gray-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] animate-fadeInUp">
            Smart investments start at just{" "}
            <span className="text-yellow-300 animate-pulse">₹8.65 Lakhs</span>{" "}
            for <span className="text-blue-300">residential plots</span> &{" "}
            <span className="text-yellow-300 animate-pulse">₹27.80 Lakhs</span>{" "}
            for <span className="text-pink-300">semi-commercial spaces</span>.
          </p>

          <button
            onClick={handleKnowMoreClick}
            className="px-6 py-3 sm:px-8 sm:py-4 mt-8 sm:mt-10 text-base sm:text-lg md:text-xl font-bold rounded-3xl shadow-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity duration-300"
          >
            Know More
          </button>
        </div>
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
