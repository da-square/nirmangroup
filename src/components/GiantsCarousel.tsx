"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import giants from "@/data/giants";

export default function GiantsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % giants.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const extended = [...giants, ...giants];

  return (
    <section className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 py-18 bg-gradient-to-b from-sky-200 via-green-100 to-sky-300 overflow-hidden">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-sky-900">
        Established Giants <span className="text-green-600">In Dholera</span>
      </h1>

      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / giants.length)}%)`,
            width: `${100}%`,
          }}
        >
          {extended.map((c, i) => (
            <div key={i} className="w-1/2 sm:w-1/3 lg:w-1/6 flex-shrink-0 px-2">
              <div className="flex items-center rounded-2xl justify-center h-32 p-4">
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={150}
                  height={80}
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
