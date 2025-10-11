"use client";

import React, { useState, useEffect } from "react";

export default function FloatingBanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed top-18 left-1/2 -translate-x-1/2 z-50
      w-11/12 max-w-3xl px-6 py-4 
      bg-white/40 backdrop-blur-md border border-white/30 
      rounded-2xl shadow-lg flex items-center justify-between
      animate-bounce-slow"
    >
      {/* Banner Message */}
      <div className="whitespace-nowrap animate-marquee">
        <p className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg">
          🎆 Diwali Sale is going on! Don’t miss what we’re offering. 🎆
        </p>
      </div>

      {/* Close Button */}
      <button
        onClick={(e) => {
          const banner = (e.currentTarget.parentElement as HTMLDivElement);
          banner.style.display = "none";
        }}
        className="ml-4 text-gray-700 hover:text-gray-900 font-bold text-lg"
      >
        ✕
      </button>
    </div>
  );
}
