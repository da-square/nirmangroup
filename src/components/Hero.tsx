"use client";
import { useState } from "react";
import Image from "next/image";

const images = ["/images/day.png", "/images/sunset.png", "/images/night.png"];
const listItems = [
  "Gift to the India, Gift city in Gujarat",
  "New tech capital of India",
  "Our new powerhouse",
];

export default function Hero() {
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
    <section className="relative flex flex-col items-start justify-center h-screen p-16 md:p-24 space-y-6 overflow-hidden">
      {/* Background Layers */}
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

      {/* Hero Content */}
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
            <ul className="mt-8 space-y-4">
              {listItems.map((item, idx) => (
                <li
                  key={idx}
                  className="text-xl md:text-2xl font-semibold opacity-0 animate-fadeUp hover:text-yellow-300 transition-all duration-300"
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
  );
}
