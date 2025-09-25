"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const images = [
  "/images/day.jpg",
  "/images/sunset.jpg",
  "/images/place.png",
  "/images/img3.jpg",
  "/images/img7.jpg",
  "/images/img4.jpg",
];

const Hero = () => {
  const [stage, setStage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleKnowMoreClick = () => {
    console.log("DF")
    const offeringsSection = document.getElementById("offerings");
    offeringsSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Trigger animation after load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-20 overflow-hidden">

        {/* Background Images */}
        <div className="absolute inset-0 overflow-hidden">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Hero background"
              fill
              priority
              className={`object-cover transition-all duration-[1500ms] ease-in-out ${
                stage === index ? "opacity-100" : "opacity-0"
              } ${
                isLoaded
                  ? "blur-0 brightness-100 scale-100"
                  : "blur-2xl brightness-75 scale-110"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Image
            src="/images/header-logo.png"
            alt="Company Logo"
            width={220}
            height={220}
            className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] animate-logoPop"
          />
        </div>

        {/* Hero Content */}
        <div
          className={`relative z-10 text-white ${orbitron.className} mt-[60vh] text-center`}
        >
          {/* Floating FOMO Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] animate-fadeInUp animate-floating">
            The Future Won’t Wait — Secure Your Place Before It’s Gone!
          </h2>
        </div>
      </section>

      {/* ANIMATIONS */}
      <style jsx global>{`
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
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes logoPop {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
        .animate-logoPop {
          animation: logoPop 1s ease forwards;
        }
      `}</style>
    </>
  );
};

export default Hero;
