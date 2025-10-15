"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Project {
  name: string;
  images: string[];
  description?: string;
}

interface ProjectImageSliderProps {
  project: Project;
}

export default function ProjectImageSlider({
  project,
}: ProjectImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // ✅ Optional Auto-slide (uncomment to enable)
  // useEffect(() => {
  //   if (!project?.images?.length) return;
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % project.images.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [project.images.length]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % project.images.length);

  // ✅ Handle swipe for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) prevSlide();
    else if (deltaX < -50) nextSlide();
    touchStartX.current = null;
  };

  if (!project.images || project.images.length === 0) return null;

  return (
    <section className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 md:px-8 py-6 sm:py-10 mt-8 sm:mt-12">
      {/* Slider Container */}
      <div
        className="relative overflow-hidden rounded-xl shadow-lg bg-black h-[18rem] sm:h-[24rem] md:h-[30rem] lg:h-[36rem]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Images Wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${
              current * (100 / project.images.length)
            }%)`,
            width: `${project.images.length * 100}%`,
          }}
        >
          {project.images.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 h-full"
              style={{ width: `${100 / project.images.length}%` }}
            >
              <Image
                src={src}
                alt={`${project.name} image ${i + 1}`}
                fill
                className={` ${
                  i === 0 ? "object-contain" : "object-fit"
                } rounded-xl ${project.name === "The Meridian" ? "pr-10" : ""}`}
                sizes="100vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="cursor-pointer absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 sm:p-3 hover:bg-black/60 transition active:scale-90"
        >
          &#10094;
        </button>

        <button
          onClick={nextSlide}
          className="cursor-pointer absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 sm:p-3 hover:bg-black/60 transition active:scale-90"
        >
          &#10095;
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 sm:bottom-5 w-full flex justify-center space-x-1.5 sm:space-x-2">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-green-500 scale-110"
                  : "bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
